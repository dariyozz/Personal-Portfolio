# How to Add Your Resume PDF

To make the download button work with your actual resume:

1. **Save your resume PDF** with the name: `Dario_Jakovleski_Resume.pdf`

2. **Place it in the `public` folder** of your project:
   \`\`\`
   your-project/
   ├── public/
   │   ├── Dario_Jakovleski_Resume.pdf  ← Put your PDF here
   │   ├── placeholder.svg
   │   └── ...
   \`\`\`

3. **The download will work automatically** once the file is in place!

## Alternative: Use a different filename

If you want to use a different filename, update the `handleDownload` function in `app/resume/page.tsx`:

\`\`\`javascript
const handleDownload = () => {
  const link = document.createElement('a')
  link.href = '/YOUR_FILENAME.pdf'  // Change this
  link.download = 'YOUR_FILENAME.pdf'  // And this
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
\`\`\`

## Testing

After adding your PDF:
1. Navigate to the `/resume` page
2. Click the "DOWNLOAD PDF" button
3. Your resume should download automatically!
