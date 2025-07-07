import subprocess
import os

def obtener_info_hardware():
    info = {}

    try:
        # Verifica si se puede usar dmidecode (requiere permisos)
        if os.geteuid() != 0:
            raise PermissionError("Debes ejecutar este script como superusuario (sudo).")

        # Modelo y fabricante de la placa base
        placa_base = subprocess.check_output(["dmidecode", "-t", "baseboard"]).decode()
        for linea in placa_base.splitlines():
            if "Manufacturer" in linea:
                info["fabricante"] = linea.split(":")[1].strip()
            elif "Product Name" in linea:
                info["modelo"] = linea.split(":")[1].strip()

        # RAM total
        meminfo = subprocess.check_output(["grep", "MemTotal", "/proc/meminfo"]).decode()
        kb = int(meminfo.split()[1])
        info["ram_total_gb"] = round(kb / 1024 / 1024, 2)  # En GB

        
        print(info)
    except PermissionError as e:
        return {"error": str(e)}
    except Exception as e:
        return {"error": f"Ocurrió un error: {e}"}
