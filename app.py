from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

# In-memory storage for tasks
# Each task is a dictionary with id, title, and status

tasks = []

@app.route('/')
def index():
    return render_template('index.html', tasks=tasks)

@app.route('/add', methods=['POST'])
def add_task():
    title = request.form.get('title')
    status = request.form.get('status')
    if title:
        task_id = len(tasks) + 1
        tasks.append({'id': task_id, 'title': title, 'status': status})
    return redirect(url_for('index'))

if __name__ == '__main__':
    app.run(debug=True)
