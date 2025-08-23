# Input  
The program begins with user input through text fields and buttons. In the **AddCity** tab, users enter a city and its country, while in the **AddCountry** tab, they provide a country and its currency. These inputs are captured as text values and validated before submission. To ensure uniqueness, each entry is assigned a universally unique identifier (UUID), which helps React efficiently update and render the list (React Native, n.d.).  

# Process  
After validation, the application updates state arrays in `App.js` using React’s `useState` hook. These arrays hold the lists of cities and countries, which are passed as props to child components. React Navigation provides a bottom tab navigator for switching between main screens and a stack navigator for hierarchical navigation, following best practices in React Native development (Dabit, 2019).  

# Output  
Finally, results are displayed as scrollable lists. If no data exists, a placeholder message appears; otherwise, entries are rendered dynamically.  

---

## References  
- Dabit, N. (2019). *React Native in action*. Manning Publications.  
- React Native. (n.d.). *React Native documentation*. https://reactnative.dev  
