<?php

return [
    Symfony\Bundle\FrameworkBundle\FrameworkBundle::class => ['all' => true],

    /*new Symfony\Bundle\FrameworkBundle\FrameworkBundle(),
    new Symfony\Bundle\SecurityBundle\SecurityBundle(),
    new Symfony\Bundle\TwigBundle\TwigBundle(),
    new Symfony\Bundle\MonologBundle\MonologBundle(),
    new Doctrine\Bundle\DoctrineBundle\DoctrineBundle(),*/

    //new JMS\DiExtraBundle\JMSDiExtraBundle($this),
    //new JMS\AopBundle\JMSAopBundle(),
    APWebsite\AppBundle\AppBundle::class => ['all' => true],
];
