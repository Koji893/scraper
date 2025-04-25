async function downloadBlob(blobURL){
    try {
	const response = await fetch(blobURL);
	return new Promise((resolve,reject)=>{
	const reader = new FileReader();
	reader.onloadend = () => resolve(reader.result);
	reader.onerror = reject;
	reader.readAsDataURL(blob);
	});

    }


}
