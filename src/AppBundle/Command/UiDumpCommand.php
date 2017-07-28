<?php

namespace APWebsite\AppBundle\Command;

use Symfony\Bundle\FrameworkBundle\Command\ContainerAwareCommand;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

class UiDumpCommand extends ContainerAwareCommand
{
    protected function configure()
    {
        $this
            ->setName('ui:dump')
            ->setDescription('Creates UI HTML entry points.');
    }

    protected function execute(InputInterface $input, OutputInterface $output)
    {
        // path where the generated files will be stored
        $webDir = $this->getContainer()->getParameter('kernel.project_dir').DIRECTORY_SEPARATOR.'web';

        // generate HTML from twig
        $viewContent = $this
            ->getContainer()
            ->get('templating')
            ->render('::base.html.twig', [
                'title' => 'Axel Penin - Web development engineer',
                'description' => 'Lorem ipsum'
            ]);

        // write generated content to a file
        file_put_contents($webDir.DIRECTORY_SEPARATOR.'index.html', $viewContent);
    }
}
