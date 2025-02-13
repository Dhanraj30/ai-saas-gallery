"use client"
import React, {useState} from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'

function VideoUpload() {
    const [file, setFile] = useState<File | null>(null)
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [isUploading, setIsUploading] = useState(false)

    const router = useRouter()
    //max file size of 60 mb

    const MAX_FILE_SIZE = 70 * 1024 * 1024

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!file) return;

        if (file.size > MAX_FILE_SIZE) {
            //TODO: add notification
            alert("File size too large")
            return;
        }

        setIsUploading(true)
        const formData = new FormData();
        formData.append("file", file);
        formData.append("title", title);
        formData.append("description", description);
        formData.append("originalSize", file.size.toString());

        try {
            await axios.post("/api/video-upload", formData)
            router.push("/")
        } catch (error) {
            console.log(error)
            // notification for failure
        } finally{
            setIsUploading(false)
        }

    }


    return (
        <div className="container mx-auto p-4 max-w-2xl">
          <h1 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Upload New Video
          </h1>
          <div className="card bg-base-100 shadow-xl">
            <form onSubmit={handleSubmit} className="card-body space-y-6">
              <div>
                <label className="label font-medium">
                  <span className="label-text">Title</span>
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="input input-bordered w-full focus:input-primary transition-colors"
                  required
                />
              </div>
              <div>
                <label className="label font-medium">
                  <span className="label-text">Description</span>
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="textarea textarea-bordered w-full min-h-[100px] focus:textarea-primary transition-colors"
                />
              </div>
              <div>
                <label className="label font-medium">
                  <span className="label-text">Video File</span>
                </label>
                <input
                  type="file"
                  accept="video/*"
                  onChange={(e) => setFile(e.target.files?.[0] || null)}
                  className="file-input file-input-bordered w-full focus:file-input-primary transition-colors"
                  required
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary w-full"
                disabled={isUploading}
              >
                {isUploading ? (
                  <>
                    <span className="loading loading-spinner"></span>
                    Uploading...
                  </>
                ) : (
                  'Upload Video'
                )}
              </button>
            </form>
          </div>
        </div>
      );
}

export default VideoUpload