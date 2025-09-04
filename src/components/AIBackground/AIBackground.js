import React, { useEffect, useRef } from 'react';
import './AIBackground.css';

const AIBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Helper function to draw hexagon
    const drawHexagon = (ctx, x, y, radius) => {
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (i * Math.PI) / 3;
        const xPos = x + radius * Math.cos(angle);
        const yPos = y + radius * Math.sin(angle);
        if (i === 0) {
          ctx.moveTo(xPos, yPos);
        } else {
          ctx.lineTo(xPos, yPos);
        }
      }
      ctx.closePath();
      ctx.stroke();
    };

    // Premium floating particles with enhanced properties
    const particles = [];
    const particleCount = 18;

    // Create subtle floating particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        radius: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.3 + 0.1,
        pulseSpeed: Math.random() * 0.02 + 0.01,
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }

    const animate = () => {
      const time = Date.now() * 0.001;

      // Create elegant subtle gradient background
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, canvas.width / 1.5
      );
      gradient.addColorStop(0, 'rgba(8, 8, 12, 1)');
      gradient.addColorStop(0.5, 'rgba(4, 4, 8, 1)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 1)');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Subtle animated overlay
      const shimmerPhase = Math.sin(time * 0.3) * 0.1 + 0.9;
      const overlayGradient = ctx.createLinearGradient(
        0, 0, canvas.width, canvas.height
      );
      overlayGradient.addColorStop(0, `rgba(12, 12, 16, ${0.3 * shimmerPhase})`);
      overlayGradient.addColorStop(0.5, `rgba(6, 6, 10, ${0.2 * shimmerPhase})`);
      overlayGradient.addColorStop(1, `rgba(3, 3, 6, ${0.4 * shimmerPhase})`);
      ctx.fillStyle = overlayGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Premium geometric patterns
      const patternSize = 120;
      ctx.strokeStyle = `rgba(255, 255, 255, ${0.015 + Math.sin(time * 0.5) * 0.005})`;
      ctx.lineWidth = 0.5;
      
      // Hexagonal pattern
      for (let x = 0; x <= canvas.width + patternSize; x += patternSize * 0.75) {
        for (let y = 0; y <= canvas.height + patternSize; y += patternSize * 0.87) {
          const offsetX = (y % (patternSize * 1.74)) === 0 ? 0 : patternSize * 0.375;
          const hexX = x + offsetX;
          const hexY = y;
          
          if (hexX >= -patternSize && hexX <= canvas.width + patternSize &&
              hexY >= -patternSize && hexY <= canvas.height + patternSize) {
            drawHexagon(ctx, hexX, hexY, 30);
          }
        }
      }

      // Update and draw particles
      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges instead of bouncing
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Enhanced pulsing with luxury feel
        const pulseOpacity = particle.opacity + Math.sin(time * particle.pulseSpeed + particle.pulsePhase) * 0.08;
        const shimmer = Math.sin(time * 2 + particle.pulsePhase) * 0.1 + 0.9;
        
        // Elegant particle glow
        const outerGlow = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.radius * 6
        );
        outerGlow.addColorStop(0, `rgba(255, 255, 255, ${pulseOpacity * 0.3})`);
        outerGlow.addColorStop(0.5, `rgba(240, 240, 240, ${pulseOpacity * 0.15})`);
        outerGlow.addColorStop(1, 'rgba(255, 255, 255, 0)');
        
        // Outer glow
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius * 6, 0, Math.PI * 2);
        ctx.fillStyle = outerGlow;
        ctx.fill();
        
        // Inner glow
        const innerGlow = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.radius * 2.5
        );
        innerGlow.addColorStop(0, `rgba(255, 255, 255, ${pulseOpacity * shimmer * 0.8})`);
        innerGlow.addColorStop(0.7, `rgba(220, 220, 220, ${pulseOpacity * 0.4 * shimmer})`);
        innerGlow.addColorStop(1, 'rgba(255, 255, 255, 0)');
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = innerGlow;
        ctx.fill();

        // Core particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${pulseOpacity * 0.7 * shimmer})`;
        ctx.fill();
      });

      // Premium connecting lines with gradient effect
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 250) {
            const opacity = Math.max(0, (250 - distance) / 250) * 0.08;
            const pulseEffect = Math.sin(time * 3 + i + j) * 0.02 + 0.03;
            
            // Create elegant gradient line
            const lineGradient = ctx.createLinearGradient(
              particles[i].x, particles[i].y,
              particles[j].x, particles[j].y
            );
            lineGradient.addColorStop(0, `rgba(255, 255, 255, ${opacity + pulseEffect})`);
            lineGradient.addColorStop(0.5, `rgba(240, 240, 240, ${(opacity + pulseEffect) * 1.1})`);
            lineGradient.addColorStop(1, `rgba(255, 255, 255, ${opacity + pulseEffect})`);
            
            ctx.beginPath();
            ctx.strokeStyle = lineGradient;
            ctx.lineWidth = 0.6;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Elegant flowing wave patterns
      const waveColors = [
        'rgba(255, 255, 255, 0.025)',
        'rgba(240, 240, 240, 0.02)',
        'rgba(220, 220, 220, 0.015)'
      ];
      
      for (let wave = 0; wave < 3; wave++) {
        ctx.strokeStyle = waveColors[wave];
        ctx.lineWidth = 1.5 - (wave * 0.3);
        
        ctx.beginPath();
        for (let x = 0; x <= canvas.width; x += 1) {
          const waveOffset = (wave + 1) * 150;
          const y = canvas.height / 3 + waveOffset + 
            Math.sin((x * 0.008) + (time * 0.4) + (wave * Math.PI * 0.8)) * 40 +
            Math.sin((x * 0.015) + (time * 0.2) + (wave * Math.PI * 0.6)) * 20 +
            Math.sin((x * 0.025) + (time * 0.1) + (wave * Math.PI * 0.4)) * 10;
          
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }

      // Add luxury light beams
      const beamCount = 3;
      for (let beam = 0; beam < beamCount; beam++) {
        const beamOpacity = (Math.sin(time * 0.5 + beam * Math.PI * 0.7) * 0.5 + 0.5) * 0.02;
        const beamX = (canvas.width / beamCount) * beam + (canvas.width / beamCount) * 0.5;
        
        const beamGradient = ctx.createLinearGradient(beamX - 2, 0, beamX + 2, 0);
        beamGradient.addColorStop(0, 'rgba(255, 255, 255, 0)');
        beamGradient.addColorStop(0.5, `rgba(255, 255, 255, ${beamOpacity})`);
        beamGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        
        ctx.fillStyle = beamGradient;
        ctx.fillRect(beamX - 2, 0, 4, canvas.height);
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="ai-background">
      <canvas ref={canvasRef} className="ai-canvas" />
    </div>
  );
};

export default AIBackground;