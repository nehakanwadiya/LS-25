import './Submit.css'

function Submit() {

  document.title = "How to Submit";
  return (
    <div className="submit-body">
      <h2 classame="title-submit">How to Submit Your Project to WebCraft</h2>
      <ul id="main">
        <li><b>1. Fork the Repository:</b> <br/> Visit the <a href="https://github.com/ITC-Web-Team/LS-25" target="_blank" rel="noopener noreferrer">GitHub repository</a> and click on Fork. This
will create a copy under your GitHub account. 
</li> <br/>
        <li><b>2. Clone Your Fork:</b> <br/>
          <code>git clone https://github.com/your-username/LS-25.git <br/>
          cd LS-25<br/>
          code .</code></li> <br/>
          <li><b>3. Create a Folder for Your Project:</b> <br/> Inside the <code>src/mentees/</code> directory, create a new folder using your name or username (e.g., <code>Bob/</code>).
</li> <br/>
<li><b>4. Add Your Project:</b> 
            <li>
          <b>Note:</b> You can see other sample folders in the <code>src/mentees/</code> directory to check structure, code formats, and examples before adding your own project.
        </li> <br/>
 Your folder should contain:

<ul>
  <li>A React app (can be minimal or complex).</li>
  <li>A file named index.jsx that: <br/>
      – Imports your main component. <br/>
      – Exports metadata (title, author, description, thumbnail).
</li>
<li>Example structure: <br/>
<img src='./structure-ex.png'></img>
</li>
</ul>
</li> <br/>
<li><b>5. Metadata Format:</b><br/>In index.jsx, include: <br/>
<img src='./index-ex.png'></img>
</li><br/>
  <li><code>meta</code> is used to generate the card for your app on the homepage.</li><br/>
  <li>Thumbnail is optional but recommended</li><br/>
  <ul><li>Place thumbnail image in: <code>public/assets/tumbnails/</code></li><br/>
  <li>Use the correct public path in your: <code>meta.thumbnail</code></li></ul><br/>
  <li><b>6. Test Locally Before Submitting</b></li>
<code>npm run dev<br/> </code> <br/>
<li><b>7. Add and Commit Your Changes:</b><br/><code>git add . <br/>
git commit -m "Added Bob's analog clock project"</code></li><br/>
<li><b>8. Push Your Branch and Create a Pull Request:</b><br/>
<code>git push origin main</code><br/>
Then go to GitHub and open a Pull Request from your forked repo's main branch to the original main branch.
</li><br/>

<li><b>9. Common mistakes to avoid</b><br/>
<ul>
<li>Not using a unique folder name.</li>
<li>Spaces in folder names(we highly recommend kebab-case).
This is recommended because the name of your folder will appear on URL, like, <code>https://webcraft.tech-iitb.org/details/bob-analog-clock</code>
</li>
<li>Missing <code>index.jsx</code>(follow folder structure)</li>
<li><code>meta</code> object not exported : Export as export const meta = {}</li>
<li>Thumbnail path is wrong(pt. 5)</li>
</ul><br/>


</li>
      </ul>
    </div>
  )
}

export default Submit
