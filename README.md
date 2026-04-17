# 👥 KeenKeeper — Keep Your Friendships Alive

---

## 🐣 Basic Requirements (Must Do for Everyone)

- My app is working on **all screen sizes** — mobile, tablet, and desktop
- My app is running without any errors after deployment

---

### 1. 🔝 Navbar

**Navbar:**
- Designed the Navbar exactly like the Figma design
- **logo on the left side**
- **navigation links on the right side** — links are: **Home**, **Timeline**, **Stats**
- Each link have an **icon** next to the text
- The **active page link** is looking different (highlighted), just like the Figma design

---

### 2. 🎯 Banner

**Banner Section (Top of the Home page):**
- A centered **title** and **subtitle**
- A **button with an icon** (e.g., "Add a Friend")
- Showed **4 summary cards below the banner**, following the Figma design

---

### 3. 📋 Friend Data (JSON File)

Created a file (e.g., `friends.json`) with **6–10 realistic friend profiles**.  
Each friend object have these fields:
```json
{
  "id": 1,
  "name": "John Doe",
  "picture": "https://example.com/photo.jpg",
  "email": "john@example.com",
  "days_since_contact": 12,
  "status": "overdue",
  "tags": ["college", "close friend"],
  "bio": "Met in university. Love hiking together.",
  "goal": 14,
  "next_due_date": "2025-07-20"
}
```

> ⚠️ No "lorem ipsum" or fake placeholder text.  
> The `status` field only be one of: `"overdue"` | `"almost due"` | `"on-track"`  
> 💡 Used an AI tool to help generate the JSON data.

---

### 4. 👫 Your Friends Section (Home Page)

- Displayed all friends from My JSON file as cards, following the Figma design
- **Each card is showing:**

| Field | Details |
|---|---|
| 📸 Picture | Friend's photo |
| 🧑 Name | Friend's full name |
| 📅 Days Since Contact | How many days ago you contacted them |
| 🏷️ Tags | e.g., "college", "work" |
| 🔴 Status | Background color changes based on status (match Figma) |

- Cards is showing in a **4-column grid layout on large screens**
- Clicking a card must navigate the user to that friend's **Detail Page**

---

### 5. 👤 Friend Details Page — Layout

This page have a **two-column layout** (follow the Figma design).

**Left Column — Friend Info Card:**

Showed the following details:
- Profile picture
- Name
- Status (with color)
- Tags
- Bio
- Email

Also added these **3 action buttons** (no functionalities for these buttons):

| Button |
|---|
| ⏰ Snooze 2 Weeks |
| 📦 Archive |
| 🗑️ Delete |

---

**Right Column — 3 sections:**

**① Stats Cards (show 3 cards):**
- Days Since Contact
- Goal (in days)
- Next Due Date

**② Relationship Goal Card:**
- Showed the current contact goal
- Added an **Edit** button

**③ Quick Check-In Card:**
- Added 3 buttons with icons: **Call**, **Text**, **Video**
- When clicked, each button adds a new entry to the **Timeline**

---

### 6. ⚡ Friend Details Page — Button Functionality

When a user clicks **Call**, **Text**, or **Video** in the Quick Check-In Card:

✅ A **new timeline entry** is automatically added with:
- The **current date**
- A **title** like:
  - "Call with Alex Johnson"
  - "Text with Alex Johnson"
  - "Video with Alex Johnson"

✅ A **toast notification** must appear when any of these buttons is clicked.



---

### 7. 📜 Timeline Page

This page shows the **history of all interactions** (calls, texts, video calls) logged from the Friend Details page.

**This page have:**
- A **"Timeline"** heading at the top
- Timeline entries displayed following the Figma design
- Each entry must show:

| Field | Details |
|---|---|
| 📅 Date | When the interaction happened |
| 🔣 Icon | Different icon for Call / Text / Video |
| 📝 Title | e.g., "Call with Sarah", "Text with Mike" |

---

### 8. 🦶 Footer

- Designed and added a footer section that matches the Figma design

---

### 9. 📱 Responsive Design

- The entire website is working correctly on **mobile, tablet, and desktop** screen sizes

---

### 10. 🛠️ Other Requirements

| # | Requirement |
|---|---|
| 10.1 | Added a **404 Page** for any unknown/invalid route |
| 10.2 | Showed a **loading animation** while the friends data is being fetched on the Home page |
| 10.3 | Showed a **relevant toast notification** when the user clicks Call, Text, or Video |
| 10.4 | Create sure **reloading any page after deployment** does not cause an error |

---

### C1. 📊 Friendship Analytics Page (Stats Page)

- The page have a **"Friendship Analytics"** heading at the top
- Added a **Pie Chart** (using Recharts) showing the count of **Call / Text / Video** interactions — match the Figma layout

---

### C2. 🔍 Timeline Filter

- Added **filter options** on the Timeline page so users can filter entries by: **Call**, **Text**, or **Video**

---

## ⭐ Optional (No Marks — Highly Recommended)

These are not required but will make your project stand out:

- **Sort** timeline entries by date (newest / oldest)
- **Search** timeline entries by friend name or interaction type

---

## 🛠️ Technologies are Used

| Technology | Purpose |
|---|---|
| **React.js** | Build the UI |
| **React Router DOM** | Handle page navigation |
| **Tailwind CSS+Any component library** | Styling and responsiveness |
| **Recharts** | Chart |

---

- **Live Link : https://keen-keeper-ruddy.vercel.app**:
- **GitHub Repository Link : https://github.com/CodeByMonir/KeenKeeper**: