<div>
    <div class='otto-logo-div' align="center" style="margin-bottom: 0px;">
        <img class='otto-logo' width='980px' src='docs/assets/otto-m8.png' style="border-radius: 5px;">
    </div>
    <h1 align="center">otto-m8</h1>
    <p align="center">A Flowchart based automation platform to run deep learning workloads with minimal to no code.</p>
    <p>otto-m8 (automate) lets users spin up a wide range of AI models, starting from Traditional deep learning models to large language models, all through a flowchart like user interface. At its core, otto-m8 will deploy a Docker container of your workflow that you can use as an API to integrate with your existing workflows, build a AI assistant chatbot or use it as a standalone API/application.</p>
    <p>The idea is simple-provide a easy-to-use user interface to spin up AI models. A lot of code needed to run AI models(both LLMs and traditional deep learning models)
    are boilerplate code blocks, including the deployments which is more often than not a REST API serving the model. The goal of otto-m8 is not only to abstract that through code
    but to abstract the entire process into a UI. Otto-m8 operates with a Input, Process, Output paradigm, where every flow has some form of input, that gets processed via a series of processes, and then an output.</p>
    <p>This is currently an MVP and made source available, which is to say this is not an Open Source software.</p>
</div>

## Getting Started

1. Pre-req: Make sure to have Docker or Docker Desktop Installed on your computer, and in order to run Ollama blocks, make sure you have the Ollama server running in the background.
2. Run the following command to make `run.sh` executable
```bash
chmod +x run.sh
```
1. Then launch the application:
```bash
./run.sh
```
This should launch both the dashboard and the server. To access the dashboard, head over to `http://localhost:3000/`. Use the default login credentials to access the dashboard, and get started on your first workflow.

### Huggingface Multimodal
![hf_multimodal_demo](https://farhan0167-otto-m8.s3.us-east-1.amazonaws.com/hf_multimodal.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIA26EOLBHR2K7N3O4H%2F20241220%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241220T034902Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQDNhvscRoX5YOT%2BdY%2FoBOtV24Q2iJvZSQDHN2hdKhv9rgIgRQgzsEZLvqf%2FnIOVmRZwzmDm6rwuw1mNdKfUsHH7PgsqiAMIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARACGgw3NTE5MTc3OTU4MTEiDNzowbpGSAtPqGYk4SrcAmtCrXgpVxDXqsyEM5Blx2%2F%2BIdKO3miWIg0brTlM2PtgLPYBLBV%2BISSY17UOQBNWtbOgWQ6Nv7gqbLHUj%2BBWQqPop3tN2sTlv549drmh0cgSkxkKoWVwBd6KvWk7sfnmsSyOW1e6AK2W5zHrPfv8WKNdQvuacgcHcvNgoqm22OuBSl7Nx1n4DrpLWXEV2GsiqbJhzcL63HTU85zfSXOUW39YnGGCrS%2Bsrmxv%2BuQSt7uY7WUhdlIckP677bBtGMHDIls2CYU4naASw0T0ggn8odktl%2BmqyX%2FRaQnVWxKip23tPXnudC2NhbKRHGTzeB3XanaoNkE13bE5eIjmXlzKuH32hPUjBKOTxGlgCmvEYEQnf7rYlDqxr5yhz9wCZwPl9nt4nEbfPUHDux9mFZbSAXtNBmT8hc5ZsBA5gTtVtUyZCl0wa7tVST%2BLYk2OAwP9KFAunhQunn8wWetqZzDuxpO7BjqzAnxLXr8vlWzw6%2BtIwQO0szjZ2Sajx6TnA7kEGLSTikc6syKj441QNetGcTV1htLL9pd4T3TaTp00%2F1a8UKISSKnrpeGNqtbHNyi8TMoVgXBP2y9DDW2IJ5EreVZs%2B1jARddFEGfaWoj%2Fs2xfotr3MGTslVo%2FEgF72AbqHJFyN%2B4mTLOz3mZJeWfXSl4iTiQRmQvyfay4861uWcg2CckZE403wLWCjtnzjNLTTaVu8j4JYflGqeKan8oRhKqYGYHKDFbEdAcsjuGI%2BS2hFZr%2FV3t2jeh5C%2Btgru5mnxR4BwSOX2C8jOAtIlOwx7ylUvc4Uo9VV7OJOdycvSIhE4xwdrHVuhBBMZ%2FpoflU98SnrONqHxzSZxkNkKEjipZ7uTHIDnS9qATPXDBJWVy1Qcb%2B7TW29%2BU%3D&X-Amz-Signature=59452435eeea40e892212f828337c944e49f4ab4e28815191ea7cc789fd23aeb&X-Amz-SignedHeaders=host&response-content-disposition=inline)