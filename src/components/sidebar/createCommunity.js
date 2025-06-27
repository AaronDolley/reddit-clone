import React, { useState, useRef } from "react";
import "./customFeed.css"

const CreateCommunity = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [bannerPreview, setBannerPreview] = useState(null);
  const [iconPreview, setIconPreview] = useState(null);

  const bannerInputRef = useRef(null);
  const iconInputRef = useRef(null);

  const handleBannerChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setBannerPreview(URL.createObjectURL(file));
    }
  };

  const handleIconChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setIconPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = () => {
    // Simulate submission
    console.log("Community submitted:");
    console.log("Name:", name);
    console.log("Description:", description);
    console.log("Banner Preview:", bannerPreview);
    console.log("Icon Preview:", iconPreview);

    // Reset
    setStep(1);
    setName("");
    setDescription("");
    setBannerPreview(null);
    setIconPreview(null);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="overlay" onClick={onClose}>
      <div className="content" onClick={(e) => e.stopPropagation()}>
        <h3>Create a Community</h3>
        <form className="feed">
          {step === 1 && (
            <div>
              <input
                type="text"
                placeholder="Community Name"
                name="name"
                maxLength={21}
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="custom"
              />

              <input
                type="text"
                placeholder="Description"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                className="custom"
              />

              <button type="button" onClick={onClose}>Cancel</button>
              <button type="button" onClick={() => setStep(2)}>Next</button>
            </div>
          )}

          {step === 2 && (
            <div>
              <h3>Style your community</h3>
              <p>Adding visual flair will help establish your community’s culture!</p>

              <div className="banner">
                <h6>Banner</h6>
                {bannerPreview && (
                  <img
                    src={bannerPreview}
                    alt="Banner Preview"
                    className="banner-preview"
                  />
                )}
                <button type="button" onClick={() => bannerInputRef.current.click()}>
                  Add
                </button>
                <input
                  type="file"
                  accept="image/*"
                  ref={bannerInputRef}
                  style={{ display: "none" }}
                  onChange={handleBannerChange}
                  className="custom"
                />
              </div>

              <div className="icon">
                <h6>Icon</h6>
                {iconPreview && (
                  <img
                    src={iconPreview}
                    alt="Icon Preview"
                    className="icon-preview"
                  />
                )}
                <button type="button" onClick={() => iconInputRef.current.click()}>
                  Add
                </button>
                <input
                  type="file"
                  accept="image/*"
                  ref={iconInputRef}
                  style={{ display: "none" }}
                  onChange={handleIconChange}
                  className="custom"
                />
              </div>

              <button type="button" onClick={onClose}>Cancel</button>
              <button type="button" onClick={handleSubmit}>Create Community</button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default CreateCommunity;