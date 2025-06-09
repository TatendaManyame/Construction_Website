import React from 'react';
import './GrowthInsights.css';

const GrowthInsights = () => {
  return (
    <section className="growth-section">
      <div className="growth-container">
        <h2 className="growth-heading">Construction Growth & Insights</h2>
        <p className="growth-subheading">Build smarter with insights and efficient project management tools.</p>

        <div className="growth-grid">
          <div className="growth-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFee8GfL1JNs0Q4W32lwRMEUikh3ttWWFen6TlDeP0YOFzLTrvWqfghqJuKh9_S9oDFtQ&usqp=CAU" alt="Project Manager" className="growth-image" />
            <div className="growth-content">
              <div className="label blue">Seamless Planning</div>
              <p>Manage construction timelines, budget allocation, and material logistics effortlessly.</p>
              <ul className="checklist">
                <li><span>✔</span> Timeline Optimization</li>
                <li><span>✔</span> Budget Tracking</li>
                <li><span>✔</span> Material Sourcing</li>
              </ul>
            </div>
          </div>

          <div className="growth-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfIWW3LyBIIvZ3YD_Mgp43S1SJLZI6yj8BLiPCuvWb66qaYVlxp-kkpmj86PKws897LJ0&usqp=CAU" alt="Construction Team" className="growth-image" />
            <div className="growth-content">
              <div className="label green">Team Collaboration</div>
              <p>Boost team productivity with clear communication, site updates, and secure messaging.</p>
              <div className="message-flow">
                <div className="message user-a">📤 Let’s finalize the site plan.</div>
                <div className="message user-b">✅ Copy that! Will update the drawings.</div>
              </div>
            </div>
          </div>

          <div className="growth-card wide">
            <div className="growth-content">
              <div className="label teal">Smart Project Tools</div>
              <p>From daily reports to supply chain automation, manage your builds with tech-first solutions.</p>
              <div className="tools">
                <div className="tool">📝 Daily Logs</div>
                <div className="tool">📦 Inventory</div>
                <div className="tool">📍 GPS Tracking</div>
                <div className="tool">🔧 Vendor Access</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthInsights;
