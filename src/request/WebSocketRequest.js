import React, { useState, useEffect, useRef } from 'react';

const WebSocketRequest = ({
  url, 
  type, 
  data, 
  onOpen, 
  onMessage, 
  onClose, 
  onError, 
}) => {
  const [socket, setSocket] = useState(null);
  const wsRef = useRef(null);

  useEffect(() => {
    wsRef.current = new WebSocket(url);

    wsRef.current.onopen = () => {
      if (onOpen) {
        onOpen();
      }
      if (type === 'POST') {
        sendPOSTRequest();
      }
    };

    wsRef.current.onmessage = (event) => {
      if (onMessage) {
        onMessage(event.data);
      }
    };

    wsRef.current.onclose = () => {
      if (onClose) {
        onClose();
      }
    };

    wsRef.current.onerror = (error) => {
      if (onError) {
        onError(error);
      }
    };

    return () => {
      wsRef.current.close();
    };
  }, [url, type, data, onOpen, onMessage, onClose, onError]);

  const sendPOSTRequest = () => {
    const payload = JSON.stringify({
      type: type, 
      data: data, 
    });
    wsRef.current.send(payload);
  };

  return null; 
};

export default WebSocketRequest;