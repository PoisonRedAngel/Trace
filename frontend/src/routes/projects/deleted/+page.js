export async function load({ fetch }) {
    const res = await fetch("/api/projects/getFromAnalystDeleted?initials=EF", {
      method: "POST",
    });
  
    const json = await res.json();
    console.log("data from backend:", json);
  
    return {
      projects: json.projects,
    };
  }
 