import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
 
export async function GET() {
  return new ImageResponse(
    (
      <div
      tw='text-7xl w-full h-full bg-red-200 flex justify-center items-center'
        // style={{
        //   fontSize: 128,
        //   background: 'white',
        //   width: '100%',
        //   height: '100%',
        //   display: 'flex',
        //   textAlign: 'center',
        //   alignItems: 'center',
        //   justifyContent: 'center',
        // }}
      >
        Hello world!
      </div>
    ),
    {
      width: 1200,
      height: 600,
    }
  )
}