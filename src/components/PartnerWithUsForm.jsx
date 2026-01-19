import { useState } from "react";
import { sendContactMessage } from "../services/contact.service";

const regions = ["Andhra Pradesh", "Telangana", "Rayalseema"];

const initialState = {
  name: "",
  mobile: "",
  email: "",
  region: "",
  address: "",
  query: "",
};

const PartnerWithUsForm = ({ onSuccess }) => {
  const [form, setForm] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    if (!form.name || !form.mobile || !form.email || !form.region) {
      return "Please fill all required fields";
    }

    if (!/^\d{10}$/.test(form.mobile)) {
      return "Please enter a valid 10-digit mobile number";
    }

    if (!/\S+@\S+\.\S+/.test(form.email)) {
      return "Please enter a valid email address";
    }

    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", message: "" });

    const error = validate();
    if (error) {
      setStatus({ type: "error", message: error });
      return;
    }

    setLoading(true);

    try {
      const res = await sendContactMessage({
        type: "PARTNER_WITH_US",
        ...form,
      });

      if (res.success) {
        setStatus({
          type: "success",
          message: "Thank you! We’ll get back to you shortly.",
        });
        setForm(initialState);
        onSuccess?.();
      } else {
        setStatus({
          type: "error",
          message: res.message || "Failed to submit form",
        });
      }
    } catch (err) {
      setStatus({
        type: "error",
        message: "Something went wrong. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <Input
        label="Name *"
        name="name"
        value={form.name}
        onChange={handleChange}
      />

      <Input
        label="Mobile Number *"
        name="mobile"
        value={form.mobile}
        onChange={handleChange}
        placeholder="10-digit mobile number"
      />

      <Input
        label="Email *"
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
      />

      <div style={styles.field}>
        <label style={styles.label}>Region *</label>
        <select
          name="region"
          value={form.region}
          onChange={handleChange}
          style={styles.select}
        >
          <option value="">Select Region</option>
          {regions.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
      </div>

      <Textarea
        label="Address"
        name="address"
        value={form.address}
        onChange={handleChange}
      />

      <Textarea
        label="Query"
        name="query"
        value={form.query}
        onChange={handleChange}
        placeholder="Tell us more about your interest..."
      />

      <button type="submit" style={styles.submit} disabled={loading}>
        {loading ? "Submitting..." : "Submit"}
      </button>

      {status.message && (
        <p
          style={{
            ...styles.status,
            color: status.type === "success" ? "green" : "red",
          }}
        >
          {status.message}
        </p>
      )}
    </form>
  );
};

export default PartnerWithUsForm;

const Input = ({ label, ...props }) => (
  <div style={styles.field}>
    <label style={styles.label}>{label}</label>
    <input {...props} style={styles.input} />
  </div>
);

const Textarea = ({ label, ...props }) => (
  <div style={styles.field}>
    <label style={styles.label}>{label}</label>
    <textarea {...props} style={styles.textarea} rows={3} />
  </div>
);

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
    marginTop: 12,
  },
  field: {
    display: "flex",
    flexDirection: "column",
    gap: 4,
  },
  label: {
    fontSize: 13,
    fontWeight: 600,
    color: "#444",
  },
  input: {
    padding: "10px",
    borderRadius: 8,
    border: "1px solid #ccc",
  },
  textarea: {
    padding: "10px",
    borderRadius: 8,
    border: "1px solid #ccc",
    resize: "vertical",
  },
  select: {
    padding: "10px",
    borderRadius: 8,
    border: "1px solid #ccc",
  },
  submit: {
    marginTop: 10,
    padding: "12px",
    borderRadius: 12,
    border: "none",
    background: "linear-gradient(135deg,#2f6f4e,#3c8b65)",
    color: "#fff",
    fontWeight: 700,
    cursor: "pointer",
  },
  status: {
    fontSize: 13,
    marginTop: 6,
    textAlign: "center",
  },
};
