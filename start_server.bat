@echo off
REM stop print

REM cd jusqu'au dir actuel
cd "%~dp0"

REM Start the server in a new hidden window
REM start "" "C:\Users\simon\AppData\Local\Programs\Python\Python312\pythonw.exe" -m http.server 8010
REM start "" "/mnt/c/Users/simon/AppData/Local/Programs/Python/Python312/pythonw.exe" -m http.server 8010
python3 -m http.server 8010
REM Wait a short moment to ensure the server is running
timeout /t 1 >nul

REM Open the browser
start "" http://localhost:8010/index.html
