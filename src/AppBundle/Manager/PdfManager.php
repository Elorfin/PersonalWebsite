<?php

namespace AppBundle\Manager;

use JMS\DiExtraBundle\Annotation as DI;
use FPDF;

/**
 * PDF manager.
 *
 * @DI\Service("app.manager.pdf")
 */
class PdfManager
{
    const FILENAME = 'uploads/axel_penin.pdf';

    public function get()
    {
        if (!$this->isUpToDate()) {
            $this->generate();
        }

        return static::FILENAME;
    }

    public function isUpToDate()
    {
        return false;
    }

    public function generate()
    {
        $pdf = new FPDF();
        $pdf->AddPage();
        $pdf->SetFont('Arial','B',16);
        $pdf->Cell(40,10,'Axel Penin');

        $pdf->Output('F', static::FILENAME);
    }
}
