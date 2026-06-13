'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function RevenueLeakCalculator() {
  const [inboundCalls, setInboundCalls] = useState(500);
  const [missedRate, setMissedRate] = useState(30);
  const [dealValue, setDealValue] = useState(500);

  const missedCalls = Math.round(inboundCalls * (missedRate / 100));
  const recoverable = Math.round(missedCalls * 0.80);
  const monthlyLeak = recoverable * dealValue;

  const [displayLeak, setDisplayLeak] = useState(0);
  const displayLeakRef = useRef(0);

  useEffect(() => {
    const duration = 800;
    const start = displayLeakRef.current;
    const end = monthlyLeak;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(start + (end - start) * eased);
      displayLeakRef.current = current;
      setDisplayLeak(current);
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [monthlyLeak]);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <div className="liquid-glass p-8 max-w-2xl mx-auto">
      <h3 className="font-serif text-2xl font-semibold mb-2 text-center rose-shimmer">
        Revenue Leak Calculator
      </h3>
      <p className="text-sm text-[#b87d6c] text-center mb-8">
        Discover how much revenue you are losing to missed calls
      </p>

      <div className="space-y-6">
        <div>
          <div className="flex justify-between mb-2">
            <label className="text-sm font-medium">Monthly Inbound Calls</label>
            <span className="text-[#e0a996] font-semibold">{inboundCalls}</span>
          </div>
          <input
            aria-label="Monthly inbound calls"
            type="range"
            min={50}
            max={2000}
            step={25}
            value={inboundCalls}
            onChange={(e) => setInboundCalls(Number(e.target.value))}
          />
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <label className="text-sm font-medium">Missed Call Rate</label>
            <span className="text-[#e0a996] font-semibold">{missedRate}%</span>
          </div>
          <input
            aria-label="Missed call rate"
            type="range"
            min={10}
            max={80}
            step={5}
            value={missedRate}
            onChange={(e) => setMissedRate(Number(e.target.value))}
          />
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <label className="text-sm font-medium">Average Deal Value</label>
            <span className="text-[#e0a996] font-semibold">{formatCurrency(dealValue)}</span>
          </div>
          <input
            aria-label="Average deal value"
            type="range"
            min={50}
            max={5000}
            step={50}
            value={dealValue}
            onChange={(e) => setDealValue(Number(e.target.value))}
          />
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-[rgba(245,214,203,0.16)]">
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="text-center">
            <p className="text-xs text-[#b87d6c] mb-1">Missed Calls</p>
            <p className="text-xl font-bold text-[#f5d6cb]">{missedCalls}</p>
          </div>
          <div className="text-center">
            <p className="text-xs text-[#b87d6c] mb-1">Recoverable</p>
            <p className="text-xl font-bold text-[#f5d6cb]">{recoverable}</p>
          </div>
          <div className="text-center">
            <p className="text-xs text-[#b87d6c] mb-1">Rescue Rate</p>
            <p className="text-xl font-bold text-[#00f2fe]">80%</p>
          </div>
        </div>

        <motion.div
          className="text-center"
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <p className="text-sm text-[#b87d6c] mb-2">Total Monthly Revenue Leak</p>
          <p className="text-4xl md:text-5xl font-bold rose-shimmer">
            {formatCurrency(displayLeak)}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
