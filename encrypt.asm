.ORIG x3000
AND R4, R4, #0 ;clearing R7
LEA R0 KEY_PROMPT ; gets address of E in encrypted and goes there
PUTS   ; prints Encryption Key
GETC
OUT  ; prints user input Key

LD R2, OFFSET ; put -30 in R2
ADD R5, R0, R2 ; converted into integer

LEA R0 IN_PROMPT
PUTS

ADD R4, R4, x-0A ; loading -x0A, representing a new line into R7
IOLOOP GETC         ; Loop to collect entire user input message. Read a character.
       OUT          ; Write the character.
       ADD R3, R4, R0  ;testing, later change R3 to increasing addresses
       BRnp IOLOOP  ; Loop if p or n
       HALT





KEY_PROMPT .STRINGZ "Encryption Key (1-9): "
IN_PROMPT .STRINGZ "Input Message : "
OFFSET .FILL x-30 ;


.END





OUT_PROMPT .STRINGZ "Encrypted Message : "
OFFSET .FILL x-30
