import { useEffect, useState } from "react";
import { FaWhatsapp, FaFilePdf } from "react-icons/fa";

const messages = [
  "👋 Need help? Chat with us!",
  "💬 Have a question? We’re on WhatsApp",
  "⚡ Instant support on WhatsApp",
  "🤝 Let’s talk — tap to chat",

  // New additions 👇
  "📲 Chat with our team in seconds",
  "😊 We’re just a message away",
  "🟢 Online now — start chatting",
  "📞 Prefer chatting? WhatsApp us",
  "🚀 Quick replies, real people",
  "💡 Need guidance? Ask us here",
  "🛒 Questions before ordering? Chat now",
  "🌱 Want to know more? Let’s chat",
  "📦 Order support? We’ve got you",
  "👨‍💼 Talk to our team instantly",
  "💚 Friendly support on WhatsApp",
  "⚡ Fast help, zero waiting",
  "🤗 We’re happy to help — tap here",
  "📲 Your questions, answered instantly",
  "🗨️ Start a conversation with us",

  "📲 Talk to us on WhatsApp anytime",
  "🟢 We’re active now — say hi!",
  "💬 Got doubts? Let’s clear them",
  "⚡ Fast answers, friendly support",
  "🤝 Real help, real people",
  "📦 Need order updates? Chat here",
  "🛍️ Shopping questions? Ask us",
  "🌾 Curious about our products? Chat now",
  "👋 Say hello on WhatsApp",
  "💚 Support that actually cares",
  "📞 Skip the call — just chat",
  "🗨️ Message us for quick help",
  "🚀 Get instant replies here",
  "🤗 We’d love to hear from you",
  "📲 Start chatting in one tap",
  "🧠 Need clarity? We’re here",
  "💡 Ask us anything",
  "🟢 Available on WhatsApp now",
  "🤝 Let’s connect instantly",
  "⚡ Help is just a tap away",
];

const WhatsAppFloat = () => {
  const phoneNumber = "919542565613";
  const message = encodeURIComponent("Hi");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  const brochureUrl = "https://cdn.atmillets.com/media/brochure/brochure.pdf";

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
      {/* Brochure Button */}
      <a
        href={brochureUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="View Brochure"
        style={styles.brochureButton}
      >
        <FaFilePdf style={styles.brochureIcon} />
      </a>

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
  brochureButton: {
    position: "fixed",
    bottom: "96px", // sits above WhatsApp button
    right: "24px",
    width: "52px",
    height: "52px",
    borderRadius: "50%",
    backgroundColor: "#E53935", // PDF red
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 9999,
    cursor: "pointer",
    textDecoration: "none",
    boxShadow: "0 6px 18px rgba(0,0,0,0.2)",
    transition: "transform 0.2s ease",
  },

  brochureIcon: {
    color: "#ffffff",
    fontSize: "26px",
  },

  popup: {
    position: "fixed",
    bottom: "38px",
    right: "96px",
    backgroundColor: "#ffffff",
    color: "#1a1a1a",
    padding: "10px 14px",
    borderRadius: "10px",
    fontSize: "14px",
    fontWeight: 500,
    boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
    zIndex: 9999,
    animation: "slideFade 0.4s ease-out",

    /* 🔑 AUTO WIDTH MAGIC */
    width: "fit-content",
    maxWidth: "280px",
    whiteSpace: "normal",
    wordBreak: "break-word",
  },
};

export default WhatsAppFloat;
