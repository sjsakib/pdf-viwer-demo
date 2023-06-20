'use client';
import styles from './page.module.css';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { useState } from 'react';

export default function Home() {
  const defaultLayoutPluginInstance = defaultLayoutPlugin({ sidebarTabs: () => [] });
  const [file, setFile] = useState<Uint8Array | null>(null);
  return (
    <main className={styles.main}>
      <input
        onChange={async event => {
          const file = await event.target.files?.[0]?.arrayBuffer();

          if (!file) return;

          setFile(new Uint8Array(file) ?? null);
        }}
        type='file'
        accept='application/pdf'
      ></input>
      {file && (
        <Worker workerUrl='https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.js'>
          <div style={{ height: '750px' }}>
            <Viewer defaultScale={1} fileUrl={file} plugins={[defaultLayoutPluginInstance]} />
          </div>
        </Worker>
      )}
    </main>
  );
}
