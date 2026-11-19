
# ShopArena – E-Commerce Product Listing

ShopArena is a responsive e-commerce product listing website built using React.js and Tailwind CSS. 

- It fetches product data from the Fake Store API and displays products in an interactive card-based layout.

The project focuses on practicing React fundamentals such as state management, props, list rendering, event handling, and conditional rendering.

## 🚀 Features

- **Product Listing:** Displays products fetched from Fake Store API.
- **Responsive UI:** Clean and modern interface built with Tailwind CSS.
- **Product Details:** Shows product images, titles, prices, categories, and ratings.
- **Delete Products:** Remove products dynamically from the UI.
- **Product Count:** Displays the total number of available products.
- **Conditional Rendering:** Displays an empty state when no products are available.
- **Interactive UI:** Smooth hover effects and transitions.

## 🛠️ Tech Stack

- **Frontend:** React.js
- **Styling:** Tailwind CSS
- **API:** Fake Store API
- **Language:** JavaScript
- **Build Tool:** Vite

## 📡 API Used

Product data is sourced from the Fake Store API.

API Endpoint:
https://fakestoreapi.com/products

The API provides product information including:
- Product ID
- Title
- Price
- Description
- Category
- Image
- Rating

## 📂 Project Structure

```text
src/
│
├── App.jsx
├── ProductsCards.jsx
├── main.jsx
└── index.css
│
├── package.json
└── README.md
```

## ⚙️ Installation & Setup

1. Clone the repository:

```bash
git clone <your-repository-link>
```

2. Navigate to the project directory:

```bash
cd your-project-folder
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

5. Open the local URL displayed in your terminal.

## 📚 React Concepts Practiced

| Concept | Implementation |
|---|---|
| useState | Managing product data |
| Props | Passing product details to components |
| map() | Rendering multiple product cards |
| filter() | Deleting products by ID |
| onClick | Handling delete button events |
| Conditional Rendering | Displaying empty product state |
| Component Reusability | Separate ProductsCards component |

## 🎯 Learning Outcomes

- Understanding component-based architecture in React.
- Managing and updating state using useState.
- Passing data and functions between components using props.
- Rendering dynamic data using map().
- Implementing delete functionality using filter().
- Building responsive interfaces using Tailwind CSS.

## 👩‍💻 Author

**Shambhavi Sahoo**

B.Tech – Computer Science and Engineering

---

⭐ If you like this project, consider giving the repository a star!
