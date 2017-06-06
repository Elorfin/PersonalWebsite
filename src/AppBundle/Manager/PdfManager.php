<?php

namespace AppBundle\Manager;

use JMS\DiExtraBundle\Annotation as DI;

/**
 * PDF manager.
 *
 * @DI\Service("app.manager.competency")
 */
class PdfManager
{
    public function get()
    {
        if (!$this->isUpToDate()) {
            $this->generate();
        }
    }

    public function isUpToDate()
    {
        return false;
    }

    public function generate()
    {

    }
}
