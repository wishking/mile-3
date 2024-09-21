document.getElementById("resumeForm")?.addEventListener("submit", (event) => {
    event.preventDefault();
  
    const name = (document.getElementById("name") as HTMLInputElement)?.value;
    const education = (document.getElementById("education") as HTMLInputElement)?.value;
    const email = (document.getElementById("email") as HTMLInputElement)?.value;
    const phone = (document.getElementById("phone") as HTMLInputElement)?.value;
    const summary = (document.getElementById("summary") as HTMLTextAreaElement)?.value;
    const skills = (document.getElementById("skills") as HTMLTextAreaElement)?.value;
    const jobs = (document.getElementById("jobs") as HTMLTextAreaElement)?.value;
    const milestone = (document.getElementById("milestone") as HTMLTextAreaElement)?.value;
  
    document.getElementById("previewName")!.textContent = name;
    document.getElementById("previewEducation")!.textContent = education;
    document.getElementById("previewEmail")!.textContent = email;
    document.getElementById("previewPhone")!.textContent = phone;
    document.getElementById("previewSummary")!.textContent = summary;
    document.getElementById("previewSkills")!.textContent = skills;
    document.getElementById("previewJobs")!.textContent = jobs;
    document.getElementById("previewMilestone")!.textContent = milestone;
  
    document.getElementById("resumeForm")!.style.display = "none";
    document.getElementById("resumePreview")!.style.display = "block";
  });
  
  document.getElementById("downloadButton")?.addEventListener("click", () => {
    const resumeContent = document.getElementById("resumePreview")!.innerHTML;
    const link = document.createElement("a");
    link.href = "data:text/html;charset=utf-8," + encodeURIComponent(resumeContent);
    link.download = "resume.html";
    link.click();
  });