import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const messages = [
  "👋 Need help? Chat with us!",
  "💬 Have a question? We’re on WhatsApp",
  "⚡ Instant support on WhatsApp",
  "🤝 Let’s talk — tap to chat",
];

const WhatsAppFloat = () => {
  const phoneNumber = "919542565613";
  const message = encodeURIComponent("Hi");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  const [showPopup, setShowPopup] = useState(true);
  const [popupText, setPopupText] = useState("👋 Hello! Click here to chat");

  useEffect(() => {
    // Hide initial popup after 6 seconds
    const initialTimer = setTimeout(() => {
      setShowPopup(false);
    }, 6000);

    // Show popup every 45 seconds with different message
    const interval = setInterval(() => {
      const random = messages[Math.floor(Math.random() * messages.length)];
      setPopupText(random);
      setShowPopup(true);

      setTimeout(() => {
        setShowPopup(false);
      }, 6000);
    }, 10000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      {/* Popup */}
      {showPopup && <div style={styles.popup}>{popupText}</div>}

      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        style={styles.button}
      >
        <FaWhatsapp style={styles.icon} />
      </a>

      {/* Keyframes */}
      <style>
        {`
          @keyframes whatsappPulse {
            0% {
              box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.6);
            }
            70% {
              box-shadow: 0 0 0 18px rgba(37, 211, 102, 0);
            }
            100% {
              box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
            }
          }

          @keyframes slideFade {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </>
  );
};

const styles = {
  button: {
    position: "fixed",
    bottom: "24px",
    right: "24px",
    width: "58px",
    height: "58px",
    borderRadius: "50%",
    backgroundColor: "#25D366",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 9999,
    cursor: "pointer",
    animation: "whatsappPulse 2.5s infinite",
    textDecoration: "none",
  },
  icon: {
    color: "#ffffff",
    fontSize: "32px",
  },
  popup: {
    position: "fixed",
    bottom: "96px",
    right: "24px",
    backgroundColor: "#ffffff",
    color: "#1a1a1a",
    padding: "10px 14px",
    borderRadius: "10px",
    fontSize: "14px",
    fontWeight: 500,
    boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
    zIndex: 9999,
    animation: "slideFade 0.4s ease-out",
    maxWidth: "220px",
  },
};

export default WhatsAppFloat;
