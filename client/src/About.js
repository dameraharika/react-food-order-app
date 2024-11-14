// About.js
import React from "react";

const About = () => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.heading}>About Us</h1>
        <p style={styles.paragraph}>
          Welcome to <strong>YummyRoute</strong>, where we make delicious food ordering as easy as a click. Our app offers a wide variety of meals from local favorites to exotic cuisines, all delivered fresh to your doorstep!
        </p>
        <p style={styles.paragraph}>
          At YummyRoute, we’re passionate about connecting people with great food. Our goal is to provide a seamless and enjoyable ordering experience, with features designed to cater to all tastes and dietary needs.
        </p>
        <p style={styles.missionHeading}>Our Mission</p>
        <p style={styles.paragraph}>
          To create an inclusive, efficient, and enjoyable dining experience, bringing people closer to their favorite dishes with the utmost convenience and reliability.
        </p>
        <p style={styles.footer}>Happy Dining! 🍲</p>
      </div>
    </div>
  );
};

const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "#f4f6f8",
      backgroundImage: "url('https://png.pngtree.com/background/20230520/original/pngtree-food-background-picture-image_2681326.jpg')", // Replace with your image URL
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    },
    card: {
      maxWidth: "600px",
      padding: "40px",
      borderRadius: "10px",
      backgroundColor: "rgba(255, 255, 255, 0.9)", // Semi-transparent for readability
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      textAlign: "center",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },
    heading: {
      fontSize: "2.5rem",
      color: "#333",
      marginBottom: "20px",
    },
    paragraph: {
      fontSize: "1.1rem",
      color: "#555",
      lineHeight: "1.6",
      marginBottom: "15px",
    },
    missionHeading: {
      fontSize: "1.5rem",
      color: "#333",
      fontWeight: "bold",
      marginTop: "25px",
      marginBottom: "10px",
    },
    footer: {
      fontSize: "1.2rem",
      color: "#007bff",
      marginTop: "20px",
      fontStyle: "italic",
    },
  };  

export default About;
