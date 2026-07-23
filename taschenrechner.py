import tkinter as tk

# ----------------------------
# Fenster
# ----------------------------
window = tk.Tk()
window.title("Python Calculator")
window.geometry("350x500")
window.resizable(False, False)
window.configure(bg="#1e1e1e")

expression = ""


# ----------------------------
# Funktionen
# ----------------------------
def press(value):
    global expression
    expression += str(value)
    display.delete(0, tk.END)
    display.insert(tk.END, expression)


def clear():
    global expression
    expression = ""
    display.delete(0, tk.END)


def calculate():
    global expression

    try:
        result = str(eval(expression))
        display.delete(0, tk.END)
        display.insert(tk.END, result)
        expression = result
    except:
        display.delete(0, tk.END)
        display.insert(tk.END, "Error")
        expression = ""


# ----------------------------
# Display
# ----------------------------
display = tk.Entry(
    window,
    font=("Segoe UI", 24),
    bd=0,
    justify="right",
    bg="#2d2d2d",
    fg="white"
)

display.pack(
    fill="x",
    padx=15,
    pady=20,
    ipady=18
)

# ----------------------------
# Buttons
# ----------------------------
frame = tk.Frame(window, bg="#1e1e1e")
frame.pack(expand=True, fill="both")

buttons = [
    ("7", 1, 0),
    ("8", 1, 1),
    ("9", 1, 2),
    ("/", 1, 3),

    ("4", 2, 0),
    ("5", 2, 1),
    ("6", 2, 2),
    ("*", 2, 3),

    ("1", 3, 0),
    ("2", 3, 1),
    ("3", 3, 2),
    ("-", 3, 3),

    ("0", 4, 0),
    (".", 4, 1),
    ("=", 4, 2),
    ("+", 4, 3),
]

for text, row, col in buttons:

    if text == "=":
        command = calculate
        color = "#6C63FF"
    elif text in ["+", "-", "*", "/"]:
        command = lambda t=text: press(t)
        color = "#4A90E2"
    else:
        command = lambda t=text: press(t)
        color = "#333333"

    button = tk.Button(
        frame,
        text=text,
        command=command,
        font=("Segoe UI", 18),
        bg=color,
        fg="white",
        bd=0,
        activebackground="#555555",
        activeforeground="white"
    )

    button.grid(
        row=row,
        column=col,
        sticky="nsew",
        padx=5,
        pady=5
    )

# Clear Button
clear_button = tk.Button(
    frame,
    text="C",
    command=clear,
    font=("Segoe UI", 18),
    bg="#E74C3C",
    fg="white",
    bd=0
)

clear_button.grid(
    row=0,
    column=0,
    columnspan=4,
    sticky="nsew",
    padx=5,
    pady=5
)

# Grid anpassen
for i in range(5):
    frame.grid_rowconfigure(i, weight=1)

for i in range(4):
    frame.grid_columnconfigure(i, weight=1)

window.mainloop()