"use client"
import React, {useState, useEffect, useCallback} from 'react'
import axios from 'axios'
import VideoCard from '@/components/VideoCard'
import { Video } from '@/types'
import Link from 'next/link'

function Home() {
    const [videos, setVideos] = useState<Video[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    const fetchVideos = useCallback(async () => {
        try {
            const response = await axios.get("/api/videos")
            if(Array.isArray(response.data)) {
                setVideos(response.data)
            } else {
                throw new Error("Unexpected response format")
            }
        } catch (error) {
            console.log("Failed to fetch videos", error)
            setError("Failed to fetch videos")
        } finally {
            setLoading(false)
        }
    }, [])

    useEffect(() => {
        fetchVideos()
    }, [fetchVideos])

    const handleDownload = useCallback((url: string, title: string) => {
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `${title}.mp4`);
        link.setAttribute("target", "_blank");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }, [])

    if(loading){
        return (
          <div className="flex items-center justify-center min-h-[60vh]">
            <div className="loading loading-spinner loading-lg text-primary"></div>
          </div>
        )
    }

    if(error) {
        return (
            <div className="flex items-center justify-center min-h-[60vh]">
                <div className="text-error">{error}</div>
            </div>
        )
    }

    return (
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Your Videos
          </h1>
          {videos.length === 0 ? (
            <div className="text-center p-12 bg-base-200 rounded-lg shadow-sm">
              <div className="text-lg text-gray-500">No videos available</div>
              <Link href="/video-upload" className="btn btn-primary mt-4">
                Upload Your First Video
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((video) => (
                <VideoCard
                  key={video.id}
                  video={video}
                  onDownload={handleDownload}
                />
              ))}
            </div>
          )}
        </div>
      );
}
export default Home
