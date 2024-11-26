(() => {
    const cascadingLinesCSS = `
        /* Reset CSS */
        *, *::before, *::after {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }
        html, body {
            font-family: 'Helvetica', 'Arial', sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 0;
        }

        /* Buttons */
        .btn {
            display: inline-block;
            padding: 0.5rem 1rem;
            font-size: 1rem;
            font-weight: 600;
            border: none;
            border-radius: 0.25rem;
            cursor: pointer;
            transition: background-color 0.3s, box-shadow 0.3s;
        }
        .btn-primary {
            background-color: #007bff;
            color: #fff;
        }
        .btn-primary:hover {
            background-color: #0056b3;
        }
        .btn-outline {
            background-color: transparent;
            border: 2px solid #007bff;
            color: #007bff;
        }
        .btn-outline:hover {
            background-color: #007bff;
            color: #fff;
        }

        /* Floating Labels */
        .floating-label {
            position: relative;
            margin-bottom: 1.5rem;
        }
        .floating-label .input {
            padding: 0.75rem 0.5rem 0.25rem;
            font-size: 1rem;
            border: 1px solid #ccc;
            border-radius: 0.25rem;
            outline: none;
            width: 100%;
        }
        .floating-label label {
            position: absolute;
            top: 50%;
            left: 0.5rem;
            transform: translateY(-50%);
            color: #aaa;
            font-size: 1rem;
            pointer-events: none;
            transition: all 0.3s ease;
        }
        .floating-label .input:focus + label,
        .floating-label .input:not(:placeholder-shown) + label {
            top: 0;
            left: 0.5rem;
            font-size: 0.75rem;
            color: #007bff;
        }

        /* Accordion */
        .accordion {
            border: 1px solid #ddd;
            border-radius: 0.25rem;
        }
        .accordion-item {
            border-top: 1px solid #ddd;
        }
        .accordion-item:first-child {
            border-top: none;
        }
        .accordion-header {
            padding: 0.75rem 1rem;
            cursor: pointer;
            background-color: #f8f9fa;
        }
        .accordion-header:hover {
            background-color: #e9ecef;
        }
        .accordion-content {
            padding: 0 1rem;
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
        }
        .accordion-content.active {
            max-height: 100vh;
        }

        /* Dropdown */
        .dropdown {
            position: relative;
            display: inline-block;
        }
        .dropdown-toggle {
            cursor: pointer;
        }
        .dropdown-menu {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            background-color: #fff;
            border: 1px solid #ddd;
            border-radius: 0.25rem;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            z-index: 10;
        }
        .dropdown-menu a {
            display: block;
            padding: 0.5rem 1rem;
            text-decoration: none;
            color: #000;
        }
        .dropdown-menu a:hover {
            background-color: #f8f9fa;
        }
        .dropdown.active .dropdown-menu {
            display: block;
        }

        /* Lists */
        .list {
            list-style-type: none;
            padding: 0;
        }
        .list-item {
            padding: 0.5rem 0;
            border-bottom: 1px solid #ddd;
        }
        .list-item:last-child {
            border-bottom: none;
        }

        /* Images */
        .img-responsive {
            max-width: 100%;
            height: auto;
            display: block;
        }
        .img-rounded {
            border-radius: 0.25rem;
        }
        .img-circle {
            border-radius: 50%;
        }

        /* Responsiveness */
        @media (max-width: 768px) {
            .btn, .input, .modal {
                font-size: 0.9rem;
            }
        }

        /* Navbar */
.navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.75rem 1rem;
    background-color: #007bff;
    color: white;
}
.navbar-brand {
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
    text-decoration: none;
}
.navbar-nav {
    list-style: none;
    display: flex;
    gap: 1rem;
}
.navbar-nav a {
    color: white;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s;
}
.navbar-nav a:hover {
    color: #dbeafe;
}

/* Progress */
.progress {
    background-color: #e9ecef;
    border-radius: 0.25rem;
    overflow: hidden;
    height: 1rem;
    width: 100%;
    margin: 1rem 0;
}
.progress-bar {
    height: 100%;
    transition: width 0.4s ease;
    background-color: #007bff;
}
.progress-bar-striped {
    background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.2) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0.2) 75%, transparent 75%, transparent);
    background-size: 1rem 1rem;
}

/* Toasts */
.toast {
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    min-width: 200px;
    padding: 0.75rem 1rem;
    border-radius: 0.25rem;
    background-color: #333;
    color: white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    animation: fadeIn 0.5s;
}
.toast-close {
    float: right;
    font-size: 1.25rem;
    font-weight: bold;
    cursor: pointer;
    color: white;
    margin-left: 0.5rem;
    line-height: 1;
}
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Tooltip */
.tooltip {
    position: relative;
    display: inline-block;
    cursor: pointer;
}
.tooltip .tooltip-text {
    visibility: hidden;
    width: 120px;
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 0.5rem;
    border-radius: 0.25rem;
    position: absolute;
    z-index: 1;
    bottom: 125%; /* Adjust for positioning */
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    transition: opacity 0.3s;
}
.tooltip:hover .tooltip-text {
    visibility: visible;
    opacity: 1;
}

/* Carousel */
.carousel {
    position: relative;
    display: flex;
    overflow: hidden;
    width: 100%;
    height: 300px;
    border-radius: 0.25rem;
    background-color: #e9ecef;
}
.carousel-inner {
    display: flex;
    transition: transform 0.5s ease-in-out;
}
.carousel-item {
    min-width: 100%;
    flex: 0 0 auto;
}
.carousel-controls {
    position: absolute;
    top: 50%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    transform: translateY(-50%);
    z-index: 10;
}
.carousel-controls button {
    background-color: rgba(0, 0, 0, 0.5);
    border: none;
    color: white;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s;
}
.carousel-controls button:hover {
    background-color: rgba(0, 0, 0, 0.8);
}
/* Spinners */
.spinner {
    display: inline-block;
    width: 2rem;
    height: 2rem;
    border: 0.25rem solid rgba(0, 123, 255, 0.2);
    border-top-color: #007bff;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}
@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}

/* Checks */
.check-container {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}
.check-input {
    appearance: none;
    width: 1rem;
    height: 1rem;
    border: 2px solid #007bff;
    border-radius: 0.25rem;
    cursor: pointer;
    transition: background-color 0.3s, border-color 0.3s;
}
.check-input:checked {
    background-color: #007bff;
    border-color: #0056b3;
}
.check-label {
    font-size: 1rem;
    cursor: pointer;
}

/* Radios */
.radio-container {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}
.radio-input {
    appearance: none;
    width: 1rem;
    height: 1rem;
    border: 2px solid #007bff;
    border-radius: 50%;
    cursor: pointer;
    transition: background-color 0.3s, border-color 0.3s;
}
.radio-input:checked {
    background-color: #007bff;
    border-color: #0056b3;
}
.radio-label {
    font-size: 1rem;
    cursor: pointer;
}

/* Textarea */
.textarea {
    width: 100%;
    padding: 0.75rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
    resize: vertical;
    outline: none;
    transition: border-color 0.3s;
}
.textarea:focus {
    border-color: #007bff;
}

/* File Select */
.file-select {
    position: relative;
    display: inline-block;
    width: 100%;
    font-size: 1rem;
}
.file-select-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
}
.file-select-label {
    display: inline-block;
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
    background-color: #f8f9fa;
    text-align: center;
    cursor: pointer;
    transition: background-color 0.3s, border-color 0.3s;
}
.file-select-label:hover {
    background-color: #e9ecef;
    border-color: #007bff;
}

/* Columns */
.columns {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}
.column {
    flex: 1;
    padding: 1rem;
    background-color: #f8f9fa;
    border: 1px solid #ddd;
    border-radius: 0.25rem;
}
.column-1 { flex: 0 0 8.33%; }
.column-2 { flex: 0 0 16.66%; }
.column-3 { flex: 0 0 25%; }
.column-4 { flex: 0 0 33.33%; }
.column-5 { flex: 0 0 41.66%; }
.column-6 { flex: 0 0 50%; }
.column-7 { flex: 0 0 58.33%; }
.column-8 { flex: 0 0 66.66%; }
.column-9 { flex: 0 0 75%; }
.column-10 { flex: 0 0 83.33%; }
.column-11 { flex: 0 0 91.66%; }
.column-12 { flex: 0 0 100%; }

/* Responsive Columns */
@media (max-width: 768px) {
    .column {
        flex: 0 0 100%;
    }
}
/* Hero Section */
.hero {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 2rem 1rem;
    background-color: #007bff;
    color: white;
    border-radius: 0.5rem;
    margin: 1rem 0;
}
.hero h1 {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
}
.hero p {
    font-size: 1.25rem;
    margin-bottom: 1.5rem;
    color: #dbeafe;
}
.hero .hero-btn {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    color: #007bff;
    background-color: white;
    border: none;
    border-radius: 0.25rem;
    text-decoration: none;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
}
.hero .hero-btn:hover {
    background-color: #dbeafe;
    color: #0056b3;
}

/* Footer */
.footer {
    background-color: #333;
    color: white;
    padding: 2rem 1rem;
    text-align: center;
    font-size: 1rem;
    border-radius: 0.5rem 0.5rem 0 0;
}
.footer p {
    margin: 0.5rem 0;
    color: #bbb;
}
.footer a {
    color: #007bff;
    text-decoration: none;
    transition: color 0.3s;
}
.footer a:hover {
    color: #dbeafe;
}
.footer .footer-links {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    margin-bottom: 1rem;
}
.footer .footer-links a {
    font-weight: 500;
}

/* Responsive Adjustments */
@media (max-width: 768px) {
    .hero h1 {
        font-size: 2rem;
    }
    .hero p {
        font-size: 1rem;
    }
    .footer .footer-links {
        flex-direction: column;
        gap: 0.75rem;
    }
}
.color-picker {
    display: inline-block;
    position: relative;
    width: 3rem;
    height: 3rem;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
    overflow: hidden;
    cursor: pointer;
}
.color-picker input[type="color"] {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
}
.color-picker-display {
    width: 100%;
    height: 100%;
    background: #f8f9fa;
    border-radius: 0.25rem;
}
.color-picker:hover .color-picker-display {
    border: 1px solid #007bff;
}
.time-picker {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 0;
}
.time-picker input[type="time"] {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
    font-size: 1rem;
    outline: none;
    transition: border-color 0.3s;
}
.time-picker input[type="time"]:focus {
    border-color: #007bff;
}
.sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 18rem;
    height: 100vh;
    background-color: #333;
    color: white;
    padding: 1rem;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
    overflow-y: auto;
    transition: transform 0.3s ease;
    transform: translateX(0);
}
.sidebar.closed {
    transform: translateX(-100%);
}
.sidebar h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
}
.sidebar a {
    display: block;
    color: #bbb;
    text-decoration: none;
    padding: 0.5rem 0;
    border-bottom: 1px solid #444;
    transition: color 0.3s;
}
.sidebar a:hover {
    color: #007bff;
}
.slider-container {
    width: 100%;
    margin: 1rem 0;
}
.slider-container label {
    display: block;
    margin-bottom: 0.5rem;
    font-size: 1rem;
}
.slider {
    width: 100%;
    appearance: none;
    height: 0.5rem;
    border-radius: 0.25rem;
    background: #ddd;
    outline: none;
    transition: background 0.3s;
}
.slider:hover {
    background: #ccc;
}
.slider::-webkit-slider-thumb {
    appearance: none;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: #007bff;
    cursor: pointer;
    transition: background-color 0.3s;
}
.slider::-webkit-slider-thumb:hover {
    background: #0056b3;
}
.badge {
    display: inline-block;
    padding: 0.25rem 0.5rem;
    font-size: 0.85rem;
    font-weight: bold;
    color: white;
    background-color: #007bff;
    border-radius: 0.5rem;
    text-align: center;
}
.badge.primary {
    background-color: #007bff;
}
.badge.success {
    background-color: #28a745;
}
.badge.warning {
    background-color: #ffc107;
}
.badge.danger {
    background-color: #dc3545;
}
.tab-container {
    display: flex;
    flex-direction: column;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
    overflow: hidden;
}
.tab-header {
    display: flex;
    background-color: #f8f9fa;
    border-bottom: 1px solid #ddd;
}
.tab-header button {
    flex: 1;
    padding: 0.75rem;
    font-size: 1rem;
    border: none;
    background-color: #f8f9fa;
    color: #333;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
}
.tab-header button:hover {
    background-color: #e9ecef;
}
.tab-header button.active {
    background-color: #007bff;
    color: white;
}
.tab-content {
    padding: 1rem;
    background-color: white;
}

    `;

    // Add the CSS dynamically
    const styleTag = document.createElement('style');
    styleTag.innerHTML = cascadingLinesCSS;
    document.head.appendChild(styleTag);
})();
