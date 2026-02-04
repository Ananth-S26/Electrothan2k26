import { useState } from "react";
import PageWrapper from "../components/PageWrapper";
import "../styles/register.css";

export default function Register() {
  const [formData, setFormData] = useState({
    teamName: "",
    leadName: "",
    leadRoll: "",
    leadEmail: "",
    leadPhone: "",
    member2Name: "",
    member2Roll: "",
    member3Name: "",
    member3Roll: "",
    problemStatement: "",
    abstract: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const validate = () => {
    const e = {};

    if (!formData.teamName) e.teamName = "Please enter your Team Name";
    if (!formData.leadName) e.leadName = "Please enter your Team Lead Name";
    if (!formData.leadRoll) e.leadRoll = "Please enter your Team Lead Roll No";

    if (!formData.leadEmail)
      e.leadEmail = "Please enter Email ID";
    else if (!/^[a-z]+\.\d{2}[a-z]{3}@kongu\.edu$/.test(formData.leadEmail))
      e.leadEmail = "Use college email (ananths.23eee@kongu.edu)";

    if (!formData.leadPhone)
      e.leadPhone = "Please enter Mobile Number";
    else if (!/^[6-9]\d{9}$/.test(formData.leadPhone))
      e.leadPhone = "Mobile number must start with 6-9 and be 10 digits";

    if (formData.member2Name && !formData.member2Roll)
      e.member2 = "Fill Roll No for Teammate 2";

    if (formData.member3Name && !formData.member3Roll)
      e.member3 = "Fill Roll No for Teammate 3";

    if (!formData.problemStatement)
      e.problemStatement = "Enter Problem Statement";

    if (!formData.abstract)
      e.abstract = "Enter Abstract";

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbzrrvdM1votcYR5XWtBS8ucfkvnXCYGXve1DV03sfuJXj4x7613upPZly_G6MuJXVg/exec",
        {
          method: "POST",
          mode: "no-cors", // 🔑 REQUIRED
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      alert("Registration Successful 🚀");

      setFormData({
        teamName: "",
        leadName: "",
        leadRoll: "",
        leadEmail: "",
        leadPhone: "",
        member2Name: "",
        member2Roll: "",
        member3Name: "",
        member3Roll: "",
        problemStatement: "",
        abstract: "",
      });

    } catch (error) {
      alert("Network error. Try again later.");
      console.error(error);
    }
  };

  return (
    <PageWrapper>
      <section className="register">
        <video
          className="bg-video"
          src="/bg.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        <h2>Join the Outlaws</h2>

        <form className="register-form" onSubmit={handleSubmit}>
          <div className="form-card">
            <h3>TEAM INFORMATION</h3>
            <input name="teamName" placeholder="Team Name" onChange={handleChange} />
            {errors.teamName && <span>{errors.teamName}</span>}
          </div>

          <div className="form-card">
            <h3>TEAM LEAD</h3>
            <input name="leadName" placeholder="Name" onChange={handleChange} />
            {errors.leadName && <span>{errors.leadName}</span>}
            <input name="leadRoll" placeholder="Roll No" onChange={handleChange} />
            {errors.leadRoll && <span>{errors.leadRoll}</span>}
            <input name="leadEmail" placeholder="Email" onChange={handleChange} />
            {errors.leadEmail && <span>{errors.leadEmail}</span>}
            <input name="leadPhone" placeholder="Mobile" onChange={handleChange} />
            {errors.leadPhone && <span>{errors.leadPhone}</span>}
          </div>

          <button type="submit" className="register-btn">
            REGISTER NOW
          </button>
        </form>
      </section>
    </PageWrapper>
  );
}
