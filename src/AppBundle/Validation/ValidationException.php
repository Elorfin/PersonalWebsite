<?php

namespace APWebsite\AppBundle\Validation;

class ValidationException extends \Exception
{
    private $errors;

    public function __construct($message, array $errors)
    {
        $this->errors = $errors;

        $errorMessages = '';
        foreach ($errors as $prop => $error) {
            $errorMessages .= sprintf("%s: %s.\n", $prop, $error);
        }

        $message = sprintf("%s\n{\n%s\n}", $message, $errorMessages);

        parent::__construct($message);
    }

    public function getErrors()
    {
        return $this->errors;
    }
}
