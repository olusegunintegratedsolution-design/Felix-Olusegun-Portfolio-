import { CV_CONFIG } from '../data/cvConfig';

export interface DownloadCvOptions {
  customBlobUrl?: string | null;
  customFileName?: string | null;
}

/**
 * Triggers the download of the developer's CV in .docx format.
 * If a custom uploaded file exists in memory/localStorage, it uses that;
 * otherwise it downloads the configured static .docx file from /cv/...
 */
export async function downloadCvFile(options?: DownloadCvOptions): Promise<{ success: boolean; message: string }> {
  try {
    const fileName = options?.customFileName || CV_CONFIG.fileName;

    // Check if custom blob URL was supplied
    if (options?.customBlobUrl) {
      const link = document.createElement('a');
      link.href = options.customBlobUrl;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      return { success: true, message: `Downloading custom ${fileName}` };
    }

    // Check localStorage for uploaded file data
    const cachedCv = localStorage.getItem('user_custom_cv_blob');
    const cachedName = localStorage.getItem('user_custom_cv_name');
    if (cachedCv) {
      const link = document.createElement('a');
      link.href = cachedCv;
      link.download = cachedName || fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      return { success: true, message: `Downloading ${cachedName || fileName}` };
    }

    // Default: fetch the static .docx from public directory
    const targetUrl = CV_CONFIG.cvDocxPath;
    const response = await fetch(targetUrl);
    
    if (response.ok) {
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      return { success: true, message: `Downloaded ${fileName} successfully!` };
    } else {
      // Fallback: try alternate path
      const altResponse = await fetch(CV_CONFIG.alternateDocxPath);
      if (altResponse.ok) {
        const blob = await altResponse.blob();
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
        return { success: true, message: `Downloaded ${fileName} successfully!` };
      }

      // If direct fetch fails in preview container, direct anchor click:
      const link = document.createElement('a');
      link.href = targetUrl;
      link.setAttribute('download', fileName);
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      return { success: true, message: `Download initiated for ${fileName}` };
    }
  } catch (error) {
    console.error('Download error:', error);
    // Direct anchor fallback
    const link = document.createElement('a');
    link.href = CV_CONFIG.cvDocxPath;
    link.download = CV_CONFIG.fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    return { success: true, message: `Download initiated for ${CV_CONFIG.fileName}` };
  }
}
