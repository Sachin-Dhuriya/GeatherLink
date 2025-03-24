import React, { useState } from "react";
import { MapPin, Clock, ThumbsUp } from "lucide-react";
import { Link } from 'react-router-dom';
import "./EventDetails.css";


const EventCard = () => {
    const [expanded, setExpanded] = useState(false);
  return (
    <div>
      {/* Event Banner Image */}
      <div className="event-banner-container">
        <img
          src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-easter-party-at-jio-world-drive-0-2025-3-15-t-9-52-19.jpg"
          alt="Easter Party"
          className="event-banner"
        />
      </div>

      {/* Main Event Card */}
      <div className="event-card">
        <div className="event-header">
          <div>
            <h2 className="event-title">Easter Party At Jio World Drive</h2>
            <p className="event-details">Entertainment | English | 3yrs + | 6hrs</p>
          </div>
          <Link to="/booking">  <button className="book-button">Book</button> </Link>
        </div>

        <hr className="divider" />

        <div className="event-info">
          <div className="event-time">
            <Clock className="icon" />
            <span>Sun 20 Apr 2025 at 3:00 PM</span>
          </div>
          <div className="event-location">
            <MapPin className="icon" />
            <span>South Sky, Jio World Drive: Mumbai</span>
          </div>
          <p className="event-price">
            ₹ 199 <span className="price-small">onwards</span>
          </p>
        </div>
      </div>

      {/* Share & Interest Section */}
    

      
      <div className="share-interest-container">
        {/* Share Box */}
        <div className="share-box">
          <h3>Share this event</h3>
          <div className="social-icons">
            <div className="social-icon">
            <Link to="https://x.com/i_beinghr">  <img src="https://img.icons8.com/ios11/512/facebook-new.png" alt="Facebook" /></Link>
            </div>
            <div className="social-icon">
            <Link to="https://x.com/i_beinghr">  <img src="https://cdn-icons-png.flaticon.com/512/733/733635.png" alt="Twitter" /> </Link>
            </div>
          </div>
        </div>

        {/* Interest Box */}
        <div className="interest-box">
          <h3>Click on Interested to stay updated about this event.</h3>
          <div className="interest-container">
            <div className="interest-info">
              <ThumbsUp className="thumbs-up" />
              <span>11</span>
            </div>
            <p className="Content-interested-Section">People have shown interest recently</p>
            <button className="interested-button">Interested?</button>
          </div>
        </div>
        



        {/* YAHA TEXT BOx VALA SHOW KRNA HAI */}

      <div className="events-aboutus-container">

   {/* Yaha se Niche ka pura code hata de Till Line no. 167 TAK */}

      <h2 className="events-aboutus-title">Why should you attend?</h2>
      <ul className="events-aboutus-bullet-list">
        <li>Egg-citing Adventures & Prizes, Meet & Greet with Hamleys Bear</li>
      </ul>
      <hr className="events-aboutus-divider" />
      <h3 className="events-aboutus-subtitle">About</h3>
      <p className="events-aboutus-bold-text">
        APPLICABLE FOR THE AGE GROUP OF 3 TO 15 YEARS ONLY
      </p>
      {expanded && (
        <div className="events-aboutus-expanded-content">
          <p>Free for kids below 2 years</p>
          <ul className="events-aboutus-bullet-list">
            <li>Egg Hunt Madness (For Kids Only)</li>
            <li>Easter Games and Prizes (For Kids Only)</li>
            <li>Easter Balloon Artist</li>
            <li>Board Games & Reading Corner</li>
            <li>Nail Art (For Kids & Adults - *Terms & Conditions Apply)</li>
            <li>Face Glitter (For Kids & Adults - *Terms & Conditions Apply)</li>
            <li>Meet and Greet Hamleys Bear</li>
          </ul>
          <p><strong>Location:</strong> South Sky</p>
          <p>
            Hop on over, little bunnies—it’s time for an EGG-straordinary Easter
            celebration at Jio World Drive! With a basket full of surprises,
            from thrilling egg hunts to hands-on crafts and a sprinkle of magic,
            this is one party you don’t want to miss!
          </p>
          <h4 className="events-aboutus-bold-text">What’s hatching at our Easter bash?</h4>
          <ul className="events-aboutus-bullet-list">
            <li>Egg Hunt Madness – Find the eggs, and win egg-citing prizes!</li>
            <li>
              Easter Games – Can you out-hop the Easter Bunny? Let’s find out!
              <ul className="events-aboutus-nested-list">
                <li>Spoon & Egg Balance Challenge 🥄</li>
                <li>Pin the Tail on the Bunny 🎯</li>
                <li>Bunny Race – Hop your way to victory! 🏆</li>
              </ul>
            </li>
            <li>Roving Acts - Look for bunny-shaped balloons and our friendly Bunny Mascot!</li>
            <li>Board Games & Reading Corner - Enjoy classic board games or Easter tales.</li>
            <li>DIY Craft Corner - Various craft activities (DIY is chargeable).</li>
            <li>Easter Treats & Delights - Special Easter-themed food (Chargeable).</li>
          </ul>
          <h4 className="events-aboutus-bold-text">Slots:</h4>
          <p>3:00 pm to 5:00 pm</p>
          <p>5:00 pm to 7:00 pm</p>
          <p>7:00 pm to 9:00 pm</p>
          <p>
            Bring your Easter spirit, your biggest smiles, and get ready to have an egg-cellent time! 🐣💖 Book your spot now!
          </p>
        </div>
      )}
      <button
        className="events-aboutus-toggle-button"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Read Less" : "Read More"}
      </button>
      <hr className="events-aboutus-divider" />
      <h2 className="events-aboutus-title">You may also like</h2>
      <div className="events-aboutus-card-container">
        <div className="events-aboutus-card">
          <img src="/path-to-image1.jpg" alt="AVI SMART PARK" className="events-aboutus-card-image" />
          <p className="events-aboutus-card-text">AVI SMART PARK</p>
        </div>
        <div className="events-aboutus-card">
          <img src="/path-to-image2.jpg" alt="Funky Monkeys Play Center" className="events-aboutus-card-image" />
          <p className="events-aboutus-card-text">Funky Monkeys Play Center</p>
        </div>
        <div className="events-aboutus-card">
          <img src="/path-to-image3.jpg" alt="Tickets: Museum of..." className="events-aboutus-card-image" />
          <p className="events-aboutus-card-text">Tickets: Museum of...</p>
        </div>
        <div className="events-aboutus-card">
          <img src="/path-to-image4.jpg" alt="Sip and Tie - A T-shirt" className="events-aboutus-card-image" />
          <p className="events-aboutus-card-text">Sip and Tie - A T-shirt</p>
        </div>
      </div>


       {/* Yaha Tak ka code hata de pura or Jo text box mai save kiya tha uska details yaha show krna */}

    </div>

      </div>

     
    </div>
  );
};

export default EventCard;
