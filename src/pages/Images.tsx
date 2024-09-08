import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import { useFormContext } from '../FormContext';
import CheckOutSteps from './progressBar';

// Update schema to handle file directly
const imageSchema = z.object({
  image: z.instanceof(File).refine((file) => file.type.startsWith('image/'), {
    message: "File must be an image",
  }),
});

type ImageFormData = z.infer<typeof imageSchema>;

const Images: React.FC = () => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<ImageFormData>({
    resolver: zodResolver(imageSchema),
  });
  const { setImage } = useFormContext();
  const navigate = useNavigate();

  // Handle image file change
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(file);
      setImagePreview(imageUrl);
      // Set the file value in react-hook-form
      setValue('image', file);
    }
  };

  // Trigger file input click
  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  // Handle form submission
  const onSubmit = (data: ImageFormData) => {
    navigate('/review-details');
  };

  return (
    <>
      <CheckOutSteps activeStep={2} />
      <form onSubmit={handleSubmit(onSubmit)} className="profile">
        <h3>Set Your Profile Picture</h3>

        <div className='preview'>
          {imagePreview ? (
            <img src={imagePreview} alt="Profile Preview" style={{ maxWidth: '100%', height: 'auto' }} />
          ) : (
            <p>No Image</p>
          )}
        </div>

        <input
          type="file"
          accept="image/*"
          {...register('image')}
          onChange={handleImageChange}
          ref={fileInputRef}
          style={{ display: 'none' }}
        />

        <button type="button" className='upload' onClick={triggerFileInput}>
          Upload Image
        </button>

        {errors.image && <p>{errors.image.message}</p>}

        <div className="next_button">
          <button type="button" className="back" onClick={() => navigate("/")}>
            Back
          </button>
          <button type="submit">Next</button>
        </div>
      </form>
    </>
  );
};

export default Images;
