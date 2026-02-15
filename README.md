# 🌍 CountryGuides

CountryGuides is a simple and responsive web application that allows users to search for any country and instantly view key information such as its flag, capital, region, population, currency, languages, and more.

The application fetches real-time data from the REST Countries API and displays it in a clean, user-friendly interface.

---

## ✨ Features

- 🔎 Search any country by name
- 🏳️ Displays country flag
- 🌐 Shows continent, region, and subregion
- 🏙️ Displays capital city
- 👥 Population formatted for readability
- 💰 Currency name and code
- 🗣️ Common languages spoken
- 🕒 Timezones
- 🌍 Top-level domain
- ❌ Error handling for invalid input
- 📱 Responsive design for all screen sizes

---

## 🛠️ Built With

- HTML5  
- CSS3  
- JavaScript (Vanilla JS)  
- REST Countries API  

---

## 📂 Project Structure
CountryGuides/
│
├── Country Guide.html # Main HTML structure
├── Country Guide.css # Styling and layout
├── Country Guide.js # Application logic and API integration
└── README.md


---

## 🚀 How It Works

1. User enters a country name in the search box
2. The app sends a request to the REST Countries API
3. The API returns country data
4. The app dynamically displays:
   - Flag
   - Capital
   - Region & Subregion
   - Population
   - Currency
   - Languages
   - Timezones
   - Domain

---

## ▶️ How to Run the Project

### Option 1 — Run Locally
1. Download or clone the repository
2. Open `Country Guide.html` in your browser
3. Enter a country name and click **Search**

### Option 2 — Using Live Server (Recommended)
1. Open the project folder in VS Code
2. Install **Live Server** extension
3. Right-click `Country Guide.html`
4. Click **Open with Live Server**

---

## 🌐 API Used

This project uses:

REST Countries API  
https://restcountries.com/

Endpoint used:
https://restcountries.com/v3.1/name/{country}?fullText=true


---

## 🎯 Learning Objectives

This project demonstrates:

- Fetch API usage
- Working with JSON data
- DOM manipulation
- Responsive UI design
- Error handling in JavaScript
- External API integration

---

## 📸 Preview

Search any country to see detailed information instantly in a clean card layout.

---

## 🙌 Future Improvements

- Search suggestions / autocomplete
- Dark mode
- Country comparison feature
- Map integration
- Voice search
- Better accessibility support

---

## 👨‍💻 Author

Your Name

---

## 📄 License

This project is open-source and available under the MIT License.
