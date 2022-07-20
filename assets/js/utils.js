const generateMailContent = (formdata, heading) => {
  const forminputs = Array.from(formdata.elements);
  let name = "";
  let email = "";
  let string = `<h3>${heading}</h3>`;

  for (input of forminputs) {
    //filter
    if (input.type.toLowerCase() === "radio" && !input.checked) continue;
    if (
      input.name.toLowerCase() === "name" ||
      input.name.toLowerCase() === "full_name"
    )
      name = input.value;
    if (input.type.toLowerCase() === "email") email = input.value;

    string += `<p>${input.name.toUpperCase().replace(/_/g, " ")}: ${
      input.value
    }</p>`;
  }

  return { mailcontent: string, name, email };
};
