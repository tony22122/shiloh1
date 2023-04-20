import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { RGBShiftShader } from 'three/examples/jsm/shaders/RGBShiftShader.js';
import { DotScreenShader } from 'three/examples/jsm/shaders/DotScreenShader.js';

const ContactThreeJsComponent =  React.memo(() => {
  const [isMounted, setIsMounted] = useState(false);
  const mountRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);

    if (isMounted) {
      console.log("useEffect called");
      let camera, renderer, composer;
      let object;

      function init() {
        renderer = new THREE.WebGLRenderer();
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        mountRef.current.appendChild(renderer.domElement);

        camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000);
        camera.position.z = 700;

        const scene = new THREE.Scene();
        scene.fog = new THREE.Fog(0x272822, 1, 1000);

        object = new THREE.Object3D();
        scene.add(object);

        const geometry = new THREE.BoxGeometry(50, 50, 50);
        const material = new THREE.MeshPhongMaterial({ color: 0xFFD700, flatShading: true });

        for (let i = 0; i < 30; i++) {
          const mesh = new THREE.Mesh(geometry, material);
          mesh.position.set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize();
          mesh.position.multiplyScalar(Math.random() * 400);
          mesh.rotation.set(Math.random() * 2, Math.random() * 2, Math.random() * 2);
          mesh.scale.x = mesh.scale.y = mesh.scale.z = Math.random() * 2;
          object.add(mesh);
        }

        scene.add(new THREE.AmbientLight(0x222222));

        const light = new THREE.DirectionalLight(0xffffff);
        light.position.set(1, 1, 1);
        scene.add(light);

        composer = new EffectComposer(renderer);
        composer.addPass(new RenderPass(scene, camera));

        const effect1 = new ShaderPass(DotScreenShader);
        effect1.uniforms['scale'].value = 4;
        composer.addPass(effect1);

        const effect2 = new ShaderPass(RGBShiftShader);
        effect2.uniforms['amount'].value = 0.0015;
        composer.addPass(effect2);

        window.addEventListener('resize', onWindowResize);
      }

      function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize(window.innerWidth, window.innerHeight);
        composer.setSize(window.innerWidth, window.innerHeight);
      }

      function animate() {
        requestAnimationFrame(animate);
        object.rotation.x += 0.002;
        object.rotation.y += 0.003;
        composer.render();
      }

      init();
      animate();

      return () => {
        // cleanup logic
        window.removeEventListener('resize', onWindowResize);
        renderer.dispose();
        composer.dispose();
      };
    }
  }, [isMounted]);

  return <div ref={mountRef} />;
});

export default ContactThreeJsComponent;
