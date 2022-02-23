export const fileUpload = async (file) => {
  //return url de la iamgen
  const cloudUrl = "https://api.cloudinary.com/v1_1/dpa1ipipf/upload";

  const formData = new FormData();

  //Se agrega por clave y valor en el append
  formData.append("upload_preset", "reacr-journal");
  formData.append("file", file);

  try {
    //Fetch por defecto hace un get, si queremos cambiar el metodo hay que configurarlo como segundo parametro
    const resp = await fetch(cloudUrl, {
      method: "POST",
      body: formData,
    });

    if (resp.ok) {
      const cloudResp = await resp.json();
      return cloudResp.secure_url;
    } else {
      throw await resp.json();
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};
