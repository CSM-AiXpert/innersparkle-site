'use client';
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

export default function ThreeDiscoBall() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 8;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    const geometry = new THREE.SphereGeometry(2.5, 32, 24);
    const material = new THREE.MeshStandardMaterial({
      color: 0xe0a996,
      metalness: 0.95,
      roughness: 0.08,
      flatShading: true,
      envMapIntensity: 1.5,
    });

    const discoBall = new THREE.Mesh(geometry, material);
    scene.add(discoBall);

    const wireframeGeom = new THREE.SphereGeometry(2.51, 32, 24);
    const wireframeMat = new THREE.MeshBasicMaterial({
      color: 0x1a0a0a,
      wireframe: true,
      transparent: true,
      opacity: 0.25
    });
    const wireframe = new THREE.Mesh(wireframeGeom, wireframeMat);
    discoBall.add(wireframe);

    const particleGeometry = new THREE.BufferGeometry();
    const particleCount = 60;
    const posArray = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 12;
    }
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particleMaterial = new THREE.PointsMaterial({
      size: 0.08,
      color: 0xf5d6cb,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending
    });
    const sparkles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(sparkles);

    const ambientLight = new THREE.AmbientLight(0xfff3f0, 0.8);
    scene.add(ambientLight);

    const directionalLight1 = new THREE.DirectionalLight(0xffffff, 2.0);
    directionalLight1.position.set(5, 5, 5);
    scene.add(directionalLight1);

    const directionalLight2 = new THREE.DirectionalLight(0xe0a996, 1.5);
    directionalLight2.position.set(-5, -5, 3);
    scene.add(directionalLight2);

    const directionalLight3 = new THREE.DirectionalLight(0xf5d6cb, 1.0);
    directionalLight3.position.set(0, 5, -3);
    scene.add(directionalLight3);

    const pointLight = new THREE.PointLight(0xf5d6cb, 2.0, 15);
    pointLight.position.set(0, 3, 2);
    scene.add(pointLight);

    const pointLight2 = new THREE.PointLight(0x00f2fe, 1.0, 10);
    pointLight2.position.set(-3, -2, 4);
    scene.add(pointLight2);

    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Slower auto rotation only, no mouse reactivity
      discoBall.rotation.y += 0.002;
      discoBall.rotation.x += 0.001;

      sparkles.rotation.y -= 0.001;
      sparkles.rotation.x += 0.0005;

      const time = Date.now() * 0.001;
      pointLight.intensity = 1.5 + Math.sin(time * 2) * 0.5;
      pointLight2.intensity = 0.8 + Math.cos(time * 1.5) * 0.4;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      geometry.dispose();
      material.dispose();
      wireframeGeom.dispose();
      wireframeMat.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} aria-hidden="true" className="w-full h-full min-h-[300px] sm:min-h-[350px] relative" />;
}
