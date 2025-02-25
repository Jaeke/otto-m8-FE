import { StatusMessage } from "../Status/StatusMessage";
import { WorkflowEdge, WorkflowNode } from "./WorkflowObject";

export interface PostDraftWorkflowBody {
  id: number | null;
  name: string;
  reference_template_id: number | null;
  description: string;
  nodes: WorkflowNode[];
  edges: WorkflowEdge[];
}

export interface PostDraftWorkflowResponse {
  status: StatusMessage;
  template_id: number;
}
