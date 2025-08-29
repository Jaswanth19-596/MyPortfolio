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

    // Neural network nodes
    const nodes = [];
    const connections = [];
    const nodeCount = 50;

    // Create nodes
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.3,
      });
    }

    // Create connections between nearby nodes
    const createConnections = () => {
      connections.length = 0;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const distance = Math.sqrt(
            Math.pow(nodes[i].x - nodes[j].x, 2) +
            Math.pow(nodes[i].y - nodes[j].y, 2)
          );
          if (distance < 150) {
            connections.push({
              from: i,
              to: j,
              opacity: Math.max(0, (150 - distance) / 150) * 0.3,
            });
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update node positions
      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off edges
        if (node.x <= 0 || node.x >= canvas.width) node.vx *= -1;
        if (node.y <= 0 || node.y >= canvas.height) node.vy *= -1;

        // Keep nodes in bounds
        node.x = Math.max(0, Math.min(canvas.width, node.x));
        node.y = Math.max(0, Math.min(canvas.height, node.y));
      });

      // Update connections
      createConnections();

      // Draw connections
      connections.forEach((connection) => {
        const fromNode = nodes[connection.from];
        const toNode = nodes[connection.to];
        
        ctx.beginPath();
        ctx.strokeStyle = `rgba(255, 255, 255, ${connection.opacity})`;
        ctx.lineWidth = 0.5;
        ctx.moveTo(fromNode.x, fromNode.y);
        ctx.lineTo(toNode.x, toNode.y);
        ctx.stroke();
      });

      // Draw nodes
      nodes.forEach((node) => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${node.opacity})`;
        ctx.fill();
      });

      // Add floating data particles
      const time = Date.now() * 0.001;
      for (let i = 0; i < 20; i++) {
        const x = (Math.sin(time * 0.5 + i) * 200) + canvas.width / 2;
        const y = (Math.cos(time * 0.3 + i) * 100) + canvas.height / 2;
        
        ctx.beginPath();
        ctx.arc(x, y, 1, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${0.2 + Math.sin(time + i) * 0.1})`;
        ctx.fill();
      }

      // Add matrix-like code rain effect
      const codeChars = '01';
      ctx.font = '12px monospace';
      for (let i = 0; i < 30; i++) {
        const x = Math.random() * canvas.width;
        const y = (time * 100 + i * 50) % canvas.height;
        const char = codeChars[Math.floor(Math.random() * codeChars.length)];
        
        ctx.fillStyle = `rgba(255, 255, 255, ${0.1 + Math.random() * 0.1})`;
        ctx.fillText(char, x, y);
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