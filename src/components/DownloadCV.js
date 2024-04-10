/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import axios from "axios";
import { useRef, useState } from "react";
import { notifier } from "../utils/notifier";

export const useDownloadFile = ({
  serverLink,
  params = "",
  downloadedFileName = "Jean_d_amour_AKIMANIZANYE.pdf",
}) => {
  const ref = useRef(null);
  const [downloading, setDownloading] = useState(false);
  const [url, setFileUrl] = useState("");
  const [name, setFileName] = useState("");

  const download = async () => {
    try {
      setDownloading(true);
      await axios.get(serverLink + params, {
        headers: { "X-Auth-Token": localStorage.getItem("userToken") ?? "" },
      });
      setFileUrl(serverLink + "/download");
      setFileName(new Date().toLocaleDateString() + "_" + downloadedFileName);

      ref.current?.click();
      setDownloading(false);
    } catch (error) {
      setDownloading(false);
      const errorMsg =
        error.response?.data?.message || "Error downloading file";
      notifier.error(errorMsg);
    }
  };

  return { download, ref, url, name, downloading };
};

export const DownloadCV = () => {
  const { download, downloading, name, ref, url } = useDownloadFile({
    serverLink: "/api/my-cv",
  });

  return (
    <>
      {name && (
        <a
          href={url}
          download={name}
          ref={ref}
          target="_blank"
          rel="noreferrer"
        />
      )}
      <button
        className="btn btn-primary"
        onClick={() => download()}
        disabled={downloading}
      >
        {downloading ? "Downloading,..." : "Download CV"}
      </button>
    </>
  );
};
