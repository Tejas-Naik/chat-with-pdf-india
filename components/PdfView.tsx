"use client";

import "react-pdf/dist/Page/AnnotateLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

import {Document, Page, pdfjs} from "react-pdf";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Loader2Icon, RotateCw, ZoomInIcon, ZoomOutIcon } from "lucide-react";

// Configure CORS
// gutils cors set cors.json gs://<app-name>.appspot.com
// gutils cors set cors.json gs://chat-with-pdf-challenge-fb1bd.appspot.com
// go here >>> https://console.cloud.google.com/
// create new file in editor calls cors.json
// run >>> gsutils cors set cors.json gs:/chat-with-pdf-challenge-fb1bd.appspot.com
// https://firebase.google.com/docs/storage/web/download-files#cors_configuration

function PdfView({url}: {url: string}) {
  return (<div>PdfView</div>)
}
 
export default PdfView