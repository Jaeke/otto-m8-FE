import { WorkflowEdge, WorkflowNode } from "./WorkflowObject";


export interface DraftWorkflow {
  id: number;
  name: string;
  description: string;
  nodes: WorkflowNode[];
  edges: WorkflowEdge[];
  reference_template_id: number | null;
  date_created: string; // Consider converting to `Date` if needed
  date_modified: string;
}
