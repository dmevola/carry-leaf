import React from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import resumePDF from '../../img/resume.pdf';

function Resume () {
    return(
        <div>
            <Document file={resumePDF}>
                <Page pageNumber={1} />
            </Document>
            </div>
    );
}

export default Resume;