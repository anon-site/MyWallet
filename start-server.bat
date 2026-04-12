@echo off
echo ==========================================
echo    Finance Manager - Server Launcher
echo ==========================================
echo.
set PORT=3000
echo Starting server at http://127.0.0.1:%PORT%
echo.
echo Press Ctrl+C to stop the server
echo.
cd /d "%~dp0"
start http://127.0.0.1:%PORT%
python -m http.server %PORT% --bind 127.0.0.1
pause
