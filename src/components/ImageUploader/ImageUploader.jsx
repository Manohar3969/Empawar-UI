import React, {useState} from 'react';

export const ImageUploader = () => {
    const [images, setImages] = useState([]);

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        const imagePreviews = files.map(file => ({
            file,
            url: URL.createObjectURL(file)
        }));
        setImages(imagePreviews);
    };

    return (
        <div>
            <h3>Upload Image(s)</h3>

            <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageChange}
            />

            <div style={{marginTop: '20px', display: 'flex', gap: '10px', flexWrap: 'wrap'}}>
                {images.map((img, index) => (
                    <div key={index}>
                        <img
                            src={img.url}
                            alt={`Selected ${index}`}
                            style={{width: '120px', height: 'auto', borderRadius: '8px'}}
                        />
                        <p style={{fontSize: '12px', textAlign: 'center'}}>{img.file.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
