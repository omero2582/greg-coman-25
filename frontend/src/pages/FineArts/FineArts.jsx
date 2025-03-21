"use client";

import { useState, useEffect } from "react";
import "./styles.css";

// Images
import Architect1 from "./assets/architect1.png";
import Architect2 from "./assets/architect2.png";
import Architect3 from "./assets/architect3.png";
import Architect4 from "./assets/architect4.png";
import Human1 from "./assets/humans1.png";
import Human2 from "./assets/humans2.png";
import Human3 from "./assets/humans3.png";
import Human4 from "./assets/humans4.png";
import Human5 from "./assets/humans5.png";
import Human6 from "./assets/humans6.png";
import Human7 from "./assets/humans7.png";
import Human8 from "./assets/humans8.png";
import Nature1 from "./assets/nature1.png";
import Nature2 from "./assets/nature2.png";
import Nature3 from "./assets/nature3.png";
import Nature4 from "./assets/nature4.png";
import Nature5 from "./assets/nature5.png";
import Nature6 from "./assets/nature6.png";
import Nature7 from "./assets/nature7.png";
import Skreets1 from "./assets/skreets1.png";
import Skreets2 from "./assets/skreets2.png";
import Skreets3 from "./assets/skreets3.png";
import Skreets4 from "./assets/skreets4.png";
import Skreets5 from "./assets/skreets5.png";

// Interactive floating button component
const FloatingButton = ({ icon, color, position, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`floating-button absolute ${position} bg-${color}-500 hover:bg-${color}-600 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg transform transition-transform duration-300 hover:scale-110`}
    >
      {icon}
    </button>
  );
};

// Photo component that handles individual photos
const Photo = ({ image, link, category }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="photo-container transform transition-all duration-500"
    >
      <div
        className={`photo-frame bg-white p-3 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border-t-4 border-${getCategoryColor(
          category
        )}-500`}
      >
        <div className="photo-mat bg-gray-100 p-2 overflow-hidden">
          <div className="photo-wrapper overflow-hidden">
            <div className="relative">
              <img
                src={image || "/placeholder.svg"}
                alt={`${category} photo`}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110 pointer-events-none"
                onContextMenu={(e) => e.preventDefault()}
                draggable="false"
              />
              <div className="absolute inset-0 bg-transparent pointer-events-auto"></div>
            </div>
          </div>
          <div
            className={`mt-2 px-2 py-1 bg-${getCategoryColor(
              category
            )}-100 rounded text-${getCategoryColor(
              category
            )}-800 text-xs font-medium inline-block`}
          >
            {category}
          </div>
        </div>
      </div>
    </a>
  );
};

// Tab button component with count
const TabButton = ({ category, isActive, onClick, count }) => {
  return (
    <div
      onClick={onClick}
      className={`px-4 py-2 rounded-lg font-medium transition-colors duration-300 cursor-pointer flex items-center ${
        isActive
          ? `bg-${getCategoryColor(category)}-500 text-white bg-[#1b699a]`
          : `bg-${getCategoryColor(category)}-100 text-${getCategoryColor(
              category
            )}-700 hover:bg-${getCategoryColor(category)}-200`
      }`}
    >
      <span>{category}</span>
      <span
        className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
          isActive ? "bg-white text-[#1b699a]" : "bg-gray-200 text-gray-700"
        }`}
      >
        {count}
      </span>
    </div>
  );
};

// Helper function to get color based on category
function getCategoryColor(category) {
  const colorMap = {
    ARCHITECTURE: "emerald",
    HUMANS: "amber",
    NATURE: "violet",
    "STREET PHOTOGRAPHY": "rose",
    Abstract: "cyan",
  };

  return colorMap[category] || "blue";
}

// Main FineArts component
const FineArts = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState("ARCHITECTURE");
  const [slideDirection, setSlideDirection] = useState("right");
  const [likeCount, setLikeCount] = useState(0);
  const [showInfo, setShowInfo] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState(["ARCHITECTURE"]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Handle tab change with animation direction
  const handleTabChange = (newTab) => {
    const categories = Object.keys(photosByCategory);
    const currentIndex = categories.indexOf(activeTab);
    const newIndex = categories.indexOf(newTab);

    setSlideDirection(newIndex > currentIndex ? "right" : "left");
    setActiveTab(newTab);

    // Reset filters to only show the selected tab
    setSelectedFilters([newTab]);
  };

  // Sample photo data organized by category
  const photosByCategory = {
    ARCHITECTURE: [
      {
        id: 1,
        image: Architect1,
        link: "https://gregcomanphotography.pic-time.com/-fineartphotographybygregcoman/gallery?inviteptoken2=AAAAAIoAAAA9zdqDV4wnHewGAz-6YiwE_TM5",
        category: "ARCHITECTURE",
      },
      {
        id: 2,
        image: Architect2,
        link: "https://gregcomanphotography.pic-time.com/-fineartphotographybygregcoman/gallery?inviteptoken2=AAAAAIoAAAA9zdqDV4wnHewGAz-6YiwE_TM5",
        category: "ARCHITECTURE",
      },
      {
        id: 3,
        image: Architect3,
        link: "https://gregcomanphotography.pic-time.com/-fineartphotographybygregcoman/gallery?inviteptoken2=AAAAAIoAAAA9zdqDV4wnHewGAz-6YiwE_TM5",
        category: "ARCHITECTURE",
      },
      {
        id: 4,
        image: Architect4,
        link: "https://gregcomanphotography.pic-time.com/-fineartphotographybygregcoman/gallery?inviteptoken2=AAAAAIoAAAA9zdqDV4wnHewGAz-6YiwE_TM5",
        category: "ARCHITECTURE",
      },
    ],
    HUMANS: [
      {
        id: 5,
        image: Human1,
        link: "https://gregcomanphotography.pic-time.com/-fineartphotographybygregcoman/gallery?inviteptoken2=AAAAAIoAAAA9zdqDV4wnHewGAz-6YiwE_TM5",
        category: "HUMANS",
      },
      {
        id: 6,
        image: Human2,
        link: "https://gregcomanphotography.pic-time.com/-fineartphotographybygregcoman/gallery?inviteptoken2=AAAAAIoAAAA9zdqDV4wnHewGAz-6YiwE_TM5",
        category: "HUMANS",
      },
      {
        id: 7,
        image: Human3,
        link: "https://gregcomanphotography.pic-time.com/-fineartphotographybygregcoman/gallery?inviteptoken2=AAAAAIoAAAA9zdqDV4wnHewGAz-6YiwE_TM5",
        category: "HUMANS",
      },
      {
        id: 8,
        image: Human4,
        link: "https://gregcomanphotography.pic-time.com/-fineartphotographybygregcoman/gallery?inviteptoken2=AAAAAIoAAAA9zdqDV4wnHewGAz-6YiwE_TM5",
        category: "HUMANS",
      },
      {
        id: 9,
        image: Human5,
        link: "https://gregcomanphotography.pic-time.com/-fineartphotographybygregcoman/gallery?inviteptoken2=AAAAAIoAAAA9zdqDV4wnHewGAz-6YiwE_TM5",
        category: "HUMANS",
      },
      {
        id: 10,
        image: Human6,
        link: "https://gregcomanphotography.pic-time.com/-fineartphotographybygregcoman/gallery?inviteptoken2=AAAAAIoAAAA9zdqDV4wnHewGAz-6YiwE_TM5",
        category: "HUMANS",
      },
      {
        id: 11,
        image: Human7,
        link: "https://gregcomanphotography.pic-time.com/-fineartphotographybygregcoman/gallery?inviteptoken2=AAAAAIoAAAA9zdqDV4wnHewGAz-6YiwE_TM5",
        category: "HUMANS",
      },
      {
        id: 12,
        image: Human8,
        link: "https://gregcomanphotography.pic-time.com/-fineartphotographybygregcoman/gallery?inviteptoken2=AAAAAIoAAAA9zdqDV4wnHewGAz-6YiwE_TM5",
        category: "HUMANS",
      },
    ],
    NATURE: [
      {
        id: 13,
        image: Nature1,
        link: "https://gregcomanphotography.pic-time.com/-fineartphotographybygregcoman/gallery?inviteptoken2=AAAAAIoAAAA9zdqDV4wnHewGAz-6YiwE_TM5",
        category: "NATURE",
      },
      {
        id: 14,
        image: Nature2,
        link: "https://gregcomanphotography.pic-time.com/-fineartphotographybygregcoman/gallery?inviteptoken2=AAAAAIoAAAA9zdqDV4wnHewGAz-6YiwE_TM5",
        category: "NATURE",
      },
      {
        id: 15,
        image: Nature3,
        link: "https://gregcomanphotography.pic-time.com/-fineartphotographybygregcoman/gallery?inviteptoken2=AAAAAIoAAAA9zdqDV4wnHewGAz-6YiwE_TM5",
        category: "NATURE",
      },
      {
        id: 16,
        image: Nature4,
        link: "https://gregcomanphotography.pic-time.com/-fineartphotographybygregcoman/gallery?inviteptoken2=AAAAAIoAAAA9zdqDV4wnHewGAz-6YiwE_TM5",
        category: "NATURE",
      },
      {
        id: 17,
        image: Nature5,
        link: "https://gregcomanphotography.pic-time.com/-fineartphotographybygregcoman/gallery?inviteptoken2=AAAAAIoAAAA9zdqDV4wnHewGAz-6YiwE_TM5",
        category: "NATURE",
      },
      {
        id: 18,
        image: Nature6,
        link: "https://gregcomanphotography.pic-time.com/-fineartphotographybygregcoman/gallery?inviteptoken2=AAAAAIoAAAA9zdqDV4wnHewGAz-6YiwE_TM5",
        category: "NATURE",
      },
      {
        id: 19,
        image: Nature7,
        link: "https://gregcomanphotography.pic-time.com/-fineartphotographybygregcoman/gallery?inviteptoken2=AAAAAIoAAAA9zdqDV4wnHewGAz-6YiwE_TM5",
        category: "NATURE",
      },
    ],
    "STREET PHOTOGRAPHY": [
      {
        id: 20,
        image: Skreets1,
        link: "https://gregcomanphotography.pic-time.com/-fineartphotographybygregcoman/gallery?inviteptoken2=AAAAAIoAAAA9zdqDV4wnHewGAz-6YiwE_TM5",
        category: "STREET PHOTOGRAPHY",
      },
      {
        id: 21,
        image: Skreets2,
        link: "https://gregcomanphotography.pic-time.com/-fineartphotographybygregcoman/gallery?inviteptoken2=AAAAAIoAAAA9zdqDV4wnHewGAz-6YiwE_TM5",
        category: "STREET PHOTOGRAPHY",
      },
      {
        id: 22,
        image: Skreets3,
        link: "https://gregcomanphotography.pic-time.com/-fineartphotographybygregcoman/gallery?inviteptoken2=AAAAAIoAAAA9zdqDV4wnHewGAz-6YiwE_TM5",
        category: "STREET PHOTOGRAPHY",
      },
      {
        id: 23,
        image: Skreets4,
        link: "https://gregcomanphotography.pic-time.com/-fineartphotographybygregcoman/gallery?inviteptoken2=AAAAAIoAAAA9zdqDV4wnHewGAz-6YiwE_TM5",
        category: "STREET PHOTOGRAPHY",
      },
      {
        id: 24,
        image: Skreets5,
        link: "https://gregcomanphotography.pic-time.com/-fineartphotographybygregcoman/gallery?inviteptoken2=AAAAAIoAAAA9zdqDV4wnHewGAz-6YiwE_TM5",
        category: "STREET PHOTOGRAPHY",
      },
    ],
  };

  // Get all photos for the active tab
  const getActivePhotos = () => {
    // Only show photos from the active tab
    return photosByCategory[activeTab] || [];
  };

  return (
    <div
      className={`photo-album-container h-full bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 p-4 md:p-8 md:py-28 transition-opacity duration-1000 ${
        isLoaded ? "opacity-100" : "opacity-0"
      } overflow-hidden flex items-center justify-center`}
    >
      <div className="max-w-6xl w-full relative">
        {/* Floating interactive elements */}
        <FloatingButton
          icon={<span className="text-xl">❤️</span>}
          color="red"
          position="top-0 right-0 md:top-4 md:right-4"
          onClick={() => setLikeCount((prev) => prev + 1)}
        />

        <FloatingButton
          icon={<span className="text-xl">ℹ️</span>}
          color="blue"
          position="top-0 left-0 md:top-4 md:left-4"
          onClick={() => setShowInfo(!showInfo)}
        />

        <FloatingButton
          icon={<span className="text-xl">🔄</span>}
          color="green"
          position="bottom-20 right-0 md:bottom-4 md:right-4"
          onClick={() => {
            const categories = Object.keys(photosByCategory);
            const currentIndex = categories.indexOf(activeTab);
            const nextIndex = (currentIndex + 1) % categories.length;
            handleTabChange(categories[nextIndex]);
          }}
        />

        {/* Info panel */}
        {showInfo && (
          <div className="absolute top-16 left-4 bg-white p-4 rounded-lg shadow-lg z-50 max-w-xs animate-fade-in">
            <h3 className="font-bold text-gray-800">About This Album</h3>
            <p className="text-gray-600 mt-2">
              This is an interactive photo album with categorized images. Click
              on any image to visit the link.
            </p>
            <button
              onClick={() => setShowInfo(false)}
              className="mt-2 text-sm text-blue-500 hover:text-blue-700 px-6 py-2 rounded-md border border-blue-500 hover:bg-blue-500 hover:text-white transition-colors duration-300"
            >
              Close
            </button>
          </div>
        )}

        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 animate-title">
          Fine Arts
        </h1>

        {likeCount > 0 && (
          <div className="text-center mb-4 animate-bounce-once">
            <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
              ❤️ {likeCount} {likeCount === 1 ? "Like" : "Likes"}
            </span>
          </div>
        )}

        {/* Tab Navigator with counts */}
        <div className="flex flex-wrap gap-2 mb-4 justify-center bg-gray-100 w-fit mx-auto p-4 rounded-lg shadow-lg">
          {Object.keys(photosByCategory).map((category) => (
            <TabButton
              key={category}
              category={category}
              isActive={activeTab === category}
              onClick={() => handleTabChange(category)}
              count={photosByCategory[category].length}
            />
          ))}
        </div>

        {/* Photo Grid with Slide Animation */}
        <div className="relative overflow-hidden">
          <div
            className={`transition-transform duration-500 ease-in-out transform ${
              slideDirection === "right" ? "slide-in-right" : "slide-in-left"
            }`}
            key={activeTab} // Key change forces re-render with animation
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {getActivePhotos().map((photo, index) => (
                <div
                  key={photo.id}
                  className="animate-slide-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Photo
                    image={photo.image}
                    link={photo.link}
                    category={photo.category}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="decorative-circle bg-gradient-to-r from-pink-300 to-purple-300 opacity-20"></div>
        <div className="decorative-square bg-gradient-to-r from-yellow-300 to-orange-300 opacity-20"></div>
      </div>
    </div>
  );
};

export default FineArts;
