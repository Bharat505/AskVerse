# How to Use AskVerse

Welcome to **AskVerse**, your smart AI assistant specialized in Kafka, Spark, and React. AskVerse helps you find precise, document-based answers, complete with citations and related follow-up questions.

## Getting Started

1. **Access the App:**
   Visit the web application at [https://ask-verse.vercel.app/](https://ask-verse.vercel.app/).

2. **Ask Your Question:**
   - Type your query into the input box.
   - Click the **"Ask"** button or press **Enter** to submit.

   **Example Questions:**
   - "What is the compiler?"
   - "How do I get started developing a UI?"
   - "How to secure my cluster?"
   - "How to update the SSL keystore?"
   - "Is streaming supported?"

3. **Review the Answer:**
   - Your detailed answer appears immediately below your query.
   - Answers are precise and factual, sourced directly from internal Kafka, Spark, and React documents.

4. **Check Citations & Confidence Score:**
   - Each answer includes **Citations**, which show the document sources.
   - A **Confidence Score** indicates the AI's certainty in the provided response (ranging from 0 to 100%).

5. **Explore Follow-Up Questions:**
   - At the bottom, you will see **Follow-up Questions**.
   - Click on any suggested follow-up to ask that question immediately.

## Switching Themes

- You can toggle between **Light Mode** and **Dark Mode** by clicking on the **"Toggle Light Mode"** button at the top.

## Example Use Case

**Question:** "What are the recommended permissions for the event log directory?"

**Answer:**

> "The recommended permissions for the event log directory are `drwxrwxrwt`. The owner and group of the directory should correspond to the super user running the Spark History Server."

- **Citations:**
  - spark/security.md
  - spark/monitoring.md

- **Confidence Score:** 100%

- **Follow-up Questions:**
  - "What is the purpose of setting the sticky bit?"
  - "How do I determine the super user running the Spark History Server?"

## Repositories

- **Backend GitHub Repository:** [AskVerse Backend](https://github.com/Bharat505/AskVerse-Backend)
- **Frontend GitHub Repository:** [AskVerse Frontend](https://github.com/Bharat505/AskVerse)

Enjoy exploring and leveraging your smart AI assistant, **AskVerse**!
