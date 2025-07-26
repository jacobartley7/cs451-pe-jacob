\# Input



The application accepts user input through a text field where tasks can be typed and submitted by pressing the “Submit” button. This input is handled as a text string and is used to generate a new to-do item that includes a unique identifier and a default incomplete status. Additional interactions include tapping on “Done” to mark a task as completed and “Delete” to remove it from the list. Filtering is controlled using three tabs: “All,” “Active,” and “Complete,” allowing the user to adjust the visible set of tasks based on completion status (Facebook, 2023; Expo, 2024).



\# Process



The program processes input using React Native’s state management via the `useState` hook. Submitted tasks are stored in an array of objects, each containing an ID, title, and completion flag. The app maps over this array to render the task list dynamically. Filtering is achieved through conditional logic applied to the task array based on the selected tab. These state updates and UI rendering occur declaratively as part of React’s component lifecycle (React Native Docs, n.d.; Lioy, 2023).



\# Output



The output is a scrollable, interactive user interface that displays the list of todos according to user actions and selected filters. Completed tasks are visually distinguished by a strikethrough effect, and the layout follows a clean, card-based design. The app dynamically updates the view in response to user input and internal state changes, providing real-time feedback and seamless interaction. The implementation meets the visual and functional specifications presented in the assignment and follows common UI/UX design practices for mobile task management apps (Jakob Nielsen, 2020; Expo, 2024).



\# References



Expo. (2024). \*Expo documentation\*. https://docs.expo.dev/



Facebook. (2023). \*React Native documentation\*. https://reactnative.dev/docs/getting-started



Jakob Nielsen. (2020). \*10 usability heuristics for user interface design\*. Nielsen Norman Group. https://www.nngroup.com/articles/ten-usability-heuristics/



Lioy, J. (2023). \*React hooks explained: useState and useEffect in depth\*. LogRocket Blog. https://blog.logrocket.com/react-hooks-complete-introduction/



React Native Docs. (n.d.). \*Components and APIs\*. https://reactnative.dev/docs/components-and-apis





