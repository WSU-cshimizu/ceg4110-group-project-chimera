# Comparative Analysis Tools Setup

### Set Up the Python Environment
1. Navigate to the 'comparative-analysis-tools' directory in your terminal.

2. Ensure that you have python v3.9 and pip v3.9 installed.

3. Create and activate a virtual environment:

    - **Linux/macOS x86**:
    ```bash
    python -m venv .env
    source .env/bin/activate
    pip install -U pip setuptools wheel
    pip install -U 'spacy[transformers,lookups]'
    python -m spacy download en_core_web_trf
    ```

    - **macOS ARM/M1**:
    ```bash
    python -m venv .env
    source .env/bin/activate
    pip install -U pip setuptools wheel
    pip install -U 'spacy[transformers,lookups,apple]'
    python -m spacy download en_core_web_trf
    ```

    - **Windows**:
    ```cmd
    python -m venv .env
    .env\Scripts\activate
    pip install -U pip setuptools wheel
    pip install -U 'spacy[transformers,lookups]'
    python -m spacy download en_core_web_trf
    ```

### Install Dependencies
```bash
pip install -r requirements.txt
```

### Run the Tools
```bash
python cat.py
```

### Deactivation
When you're done, deactivate the environment by running:
```bash
deactivate
```